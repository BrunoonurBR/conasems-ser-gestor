<?php
if ( ! defined( 'MYCRED_H5P_SLUG' ) ) exit;

/**
 * myCRED_Addons_Module class
 * @since 0.1
 * @version 1.1.1
 */
if ( ! class_exists( 'myCRED_H5P_General_Hook' ) ) :
	class myCRED_H5P_General_Hook extends myCRED_Hook {

		/**
		 * Construct
		 */
		function __construct( $hook_prefs, $type = MYCRED_DEFAULT_TYPE_KEY ) {

			parent::__construct( array(
				'id'       => 'completing_h5p_content_general',
				'defaults' => array(
					'creds'      => 10,
					'log'        => '%plural% for completing a H5P content.',
					'percentage' => 0,
					'limit'   => 'x'
				)
			), $hook_prefs, $type );

		}

		/**
		 * Run
		 * @since 1.8
		 * @version 1.0
		 */
		public function run() {

			add_action('h5p_alter_user_result',  array( $this, 'h5p_content_result' ), 10, 4);

		}

		/**
		 * Page Load
		 * @since 1.8
		 * @version 1.0
		 */
		public function h5p_content_result( $data, $result_id, $content_id, $user_id ) {

			if ( $result_id ) return;

			$hook_prefs_key = 'mycred_pref_hooks';

			if ( $this->mycred_type != MYCRED_DEFAULT_TYPE_KEY ) {
				$hook_prefs_key = 'mycred_pref_hooks_'.$this->mycred_type;
			}

			$hooks = get_option( $hook_prefs_key, false );

			if ( ! empty( $hooks['hook_prefs'] ) && ! empty( $hooks['hook_prefs']['completing_h5p_content_specific'] ) ) {
				if( in_array( $content_id, $hooks['hook_prefs']['completing_h5p_content_specific']['content'] ) ) return;
			}

			// Make sure user is not excluded
			if ( $this->core->exclude_user( $user_id ) ) return;

			$ref_type  = array( 'ref_type' => 'post' );

			if( 
				$this->has_entry( 'completing_h5p_content_general', $content_id, $user_id, $ref_type, $this->mycred_type ) ||
				$this->has_entry( 'completing_h5p_content_specific', $content_id, $user_id, $ref_type, $this->mycred_type )
			) return;

			// Limit
			//if ( ! $this->over_hook_limit( '', 'completing_h5p_content_general', $user_id ) ) return;

			$max_score = floatval( $data['max_score'] );
			$score = floatval( $data['score'] );
			$percentage = ( $score / $max_score ) * 100;

			if ( $this->prefs['percentage'] == 0 || $percentage >= floatval( $this->prefs['percentage'] ) ) {
				// Execute
				$this->core->add_creds(
			        'completing_h5p_content_general',
			        $user_id,
			        $this->prefs['creds'],
			        $this->prefs['log'],
			        $content_id,
			        $ref_type,
					$this->mycred_type
				);
			}

		}

		/**
		 * Preference for Anniversary Hook
		 * @since 1.8
		 * @version 1.0
		 */
		public function preferences() {

			$prefs = $this->prefs;

?>
<div class="hook-instance">
	<div class="row">
		<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
			<div class="form-group">
				<label for="<?php echo $this->field_id( 'creds' ); ?>"><?php echo $this->core->plural(); ?></label>
				<input type="text" name="<?php echo $this->field_name( 'creds' ); ?>" id="<?php echo $this->field_id( 'creds' ); ?>" value="<?php echo $this->core->number( $prefs['creds'] ); ?>" class="form-control" />
			</div>
		</div>
		<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
			<div class="form-group">
				<label for="<?php echo $this->field_id( 'percentage' ); ?>"><?php _e( 'Required Percentage', 'mycred' ); ?></label>
				<input type="text" name="<?php echo $this->field_name( 'percentage' ); ?>" id="<?php echo $this->field_id( 'percentage' ); ?>" value="<?php echo $this->core->number( $prefs['percentage'] ); ?>" class="form-control" />
				<span class="description"><?php _e( 'Use zero to disable.', 'mycred' ); ?></span>
			</div>
		</div>
		<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
			<div class="form-group">
				<label for="<?php echo $this->field_id( 'limit' ); ?>"><?php _e( 'Limit', 'mycred' ); ?></label>
				<?php echo $this->hook_limit_setting( $this->field_name( 'limit' ), $this->field_id( 'limit' ), $prefs['limit'] ); ?>
			</div>
		</div>
		<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
			<div class="form-group">
				<label for="<?php echo $this->field_id( 'log' ); ?>"><?php _e( 'Log Template', 'mycred' ); ?></label>
				<input type="text" name="<?php echo $this->field_name( 'log' ); ?>" id="<?php echo $this->field_id( 'log' ); ?>" placeholder="<?php _e( 'required', 'mycred' ); ?>" value="<?php echo esc_attr( $prefs['log'] ); ?>" class="form-control" />
				<span class="description"><?php echo $this->available_template_tags( array( 'general' ) ); ?></span>
			</div>
		</div>
	</div>
</div>
<?php

		}

	   /**
	   * Sanitize Preferences
	   */
		public function sanitise_preferences( $data ) {
			$new_data = $data;
			// Apply defaults if any field is left empty
			$new_data['creds'] = ( !empty( $data['creds'] ) ) ? sanitize_text_field( $data['creds'] ) : $this->defaults['creds'];
			$new_data['log'] = ( !empty( $data['log'] ) ) ? sanitize_text_field( $data['log'] ) : $this->defaults['log'];
			$new_data['percentage'] = ( !empty( $data['percentage'] ) ) ? $data['percentage'] : $this->defaults['percentage'];

			if ( isset( $data['limit'] ) && isset( $data['limit_by'] ) ) {
				$limit = sanitize_text_field( $data['limit'] );
				if ( $limit == '' ) $limit = 0;
				$new_data['limit'] = $limit . '/' . $data['limit_by'];
				unset( $data['limit_by'] );
			}

			return $new_data;
		}

	}
endif;