<?php
if ( ! defined( 'MYCRED_H5P_SLUG' ) ) exit;

/**
 * Check Page
 * @since 1.0
 * @version 1.0
 */
if ( ! function_exists( 'is_mycred_hook_page' ) ) :
	function is_mycred_hook_page( $page ){
		return ( strpos( $page, 'mycred' ) !== false && strpos( $page, 'hook' ) !== false );
	}
endif;

if ( ! function_exists( 'mycred_h5p_field_name' ) ) :
	function mycred_h5p_field_name( $type, $attr ){

		$hook_prefs_key = 'mycred_pref_hooks';

		if ( $type != MYCRED_DEFAULT_TYPE_KEY ) {
			$hook_prefs_key = 'mycred_pref_hooks_'.$type;
		}

		return "{$hook_prefs_key}[hook_prefs][completing_h5p_content_specific][{$attr}][]";
	}
endif;

if ( ! function_exists( 'mycred_h5p_specific_hook_setting' ) ) :
	function mycred_h5p_specific_hook_setting( $data, $obj ){

		foreach ( $data as $hook ) {

			$h5p_posts = mycred_get_h5p_content_posts();

			$h5p_options = '<option value="0">Select Content</option>';

			if ( ! empty( $h5p_posts ) ) {
				foreach ( $h5p_posts as $post ) {
					$h5p_options .= '<option value="'.$post->id.'" '.selected( $hook['content'], $post->id, false ).' >'.$post->title.'</option>';
				}
			}
		?>
		<div class="hook-instance">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
						<label><?php echo $obj->core->plural(); ?></label>
						<input type="text" name="<?php echo mycred_h5p_field_name( $obj->mycred_type, 'creds' ); ?>" value="<?php echo $obj->core->number( $hook['creds'] ); ?>" class="form-control mycred-h5p-creds" />
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
						<label><?php _e( 'Log Template', 'mycred' ); ?></label>
						<input type="text" name="<?php echo mycred_h5p_field_name( $obj->mycred_type, 'log' ); ?>" placeholder="<?php _e( 'required', 'mycred' ); ?>" value="<?php echo esc_attr( $hook['log'] ); ?>" class="form-control mycred-h5p-log" />
						<span class="description"><?php echo $obj->available_template_tags( array( 'general' ) ); ?></span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
						<label><?php _e( 'Select Specific Content', 'mycred' ); ?></label>
						<select class="form-control mycred-h5p-content" name="<?php echo mycred_h5p_field_name( $obj->mycred_type, 'content' ); ?>">
							<?php echo $h5p_options; ?>
						</select>
						<span class="description"><?php _e( 'Use zero to disable.', 'mycred' ); ?></span>
					</div>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
					<div class="form-group">
						<label><?php _e( 'Required Percentage', 'mycred' ); ?></label>
						<input type="text" name="<?php echo mycred_h5p_field_name( $obj->mycred_type, 'percentage' ); ?>" value="<?php echo $obj->core->number( $hook['percentage'] ); ?>" class="form-control mycred-h5p-percentage" />
						<span class="description"><?php _e( 'Use zero to disable.', 'mycred' ); ?></span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div class="form-group specific-hook-actions textright">
						<button class="button button-small mycred-add-specific-hook" type="button">Add More</button>
						<button class="button button-small mycred-remove-specific-hook" type="button">Remove</button>
					</div>
				</div>
			</div>
		</div>
	<?php
		}
	}
endif;

if ( ! function_exists( 'mycred_get_h5p_content_posts' ) ) :
	function mycred_get_h5p_content_posts(){
		$h5p_posts = wp_cache_get( 'mycred_h5p_content_list' );
    	if ( false === $h5p_posts ) {
    		global $wpdb;
			$h5p_posts = $wpdb->get_results( "SELECT id, title FROM {$wpdb->prefix}h5p_contents" );
    		wp_cache_set( 'mycred_h5p_content_list', $h5p_posts );
    	}
    	return $h5p_posts;
	}
endif;

if ( ! function_exists( 'mycred_h5p_arrange_data' ) ) :
	function mycred_h5p_arrange_data( $data ){
		$hook_data = array();
		foreach ( $data['content'] as $key => $value ) {
			$hook_data[$key]['creds']      = $data['creds'][$key];
			$hook_data[$key]['log']        = $data['log'][$key];
			$hook_data[$key]['percentage'] = $data['percentage'][$key];
			$hook_data[$key]['content']    = $value;
		}
		return $hook_data;
	}
endif;

if ( ! function_exists( 'mycred_h5p_badge_requirement' ) ) :
	function mycred_h5p_badge_requirement( $query, $requirement_id, $requirement, $having, $user_id ){
		
		global $wpdb, $mycred_log_table;

		if( 
			$requirement['reference'] == 'completing_h5p_content_specific' && 
			! empty( $requirement['specific'] ) && 
			$requirement['specific'] != 'Any' 
		) {
			$query = $wpdb->get_var( $wpdb->prepare( "SELECT {$having} FROM {$mycred_log_table} WHERE ctype = %s AND ref = %s OR ref = %s AND ref_id = %d AND user_id = %d;", $requirement['type'], $requirement['reference'], 'completing_h5p_content_general', $requirement['specific'], $user_id ) );
		}
		return $query;
	}
endif;

if ( ! function_exists( 'mycred_h5p_badge_template' ) ) :
	function mycred_h5p_badge_template( $data, $requirement_id, $requirement, $badge, $level ){
		
		if( $requirement['reference'] == 'completing_h5p_content_specific' && ! empty( $requirement['specific'] ) ) {
			
			$h5p_posts = mycred_get_h5p_content_posts();

			$h5p_options = '';

			foreach ( $h5p_posts as $post ) {
				$h5p_options .= '<option value="'.$post->id.'" '.selected( $requirement['specific'], $post->id, false ).' >'.$post->title.'</option>';
			}

			$data = '<div class="form-group"><select name="mycred_badge[levels]['.$level.'][requires]['.$requirement_id.'][specific]" class="form-control specific" data-row="'.$requirement_id.'" >'.$h5p_options.'</select></div>';

		}
		return $data;
	}
endif;

if ( ! function_exists( 'mycred_h5p_admin_header' ) ) :
	function mycred_h5p_admin_header(){
		$screen = get_current_screen();

		if ( class_exists( 'myCRED_Addons_Module' ) ) {
			
			$mycred_modules = new myCRED_Addons_Module();
        	
        	if ( $mycred_modules->is_active( 'badges' ) && $screen->id == MYCRED_BADGE_KEY ) {?>

			    <script type="text/javascript">
			    <?php
			    	$h5p_posts = mycred_get_h5p_content_posts();

					$h5p_options = '';

					foreach ( $h5p_posts as $post ) {
						$h5p_options .= '<option value="'.$post->id.'">'.$post->title.'</option>';
					}
					$data = '<div class="form-group"><select name="{{element_name}}" class="form-control specific" data-row="{{reqlevel}}" >'.$h5p_options.'</select></div>';
					echo "var mycred_badge_completing_h5p_content_specific = '".$data."';";
			    ?>
			    </script>

				<?php 
        	}
		}

	}
endif;