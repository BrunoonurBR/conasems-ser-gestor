<?php
if ( ! defined( 'MYCRED_H5P_SLUG' ) ) exit;

/**
 * myCRED_Addons_Module class
 * @since 0.1
 * @version 1.1.1
 */
if ( ! class_exists( 'myCRED_H5P_Specific_Hook' ) ) :
	class myCRED_H5P_Specific_Hook extends myCRED_Hook {

		/**
		 * Construct
		 */
		function __construct( $hook_prefs, $type = MYCRED_DEFAULT_TYPE_KEY ) {

			parent::__construct( array(
				'id'       => 'completing_h5p_content_specific',
				'defaults' => array(
					'creds'      => array(),
					'percentage' => array(),
					'log'        => array(),
					'content'    => array()
				)
			), $hook_prefs, $type );

		}

		/**
		 * Run
		 * @since 1.8
		 * @version 1.0
		 */
		public function run() {

			add_action('h5p_alter_user_result',  array( $this, 'h5p_content_result' ), 20, 4);

		}

		/**
		 * Page Load
		 * @since 1.8
		 * @version 1.0
		 */
		public function h5p_content_result( $data, $result_id, $content_id, $user_id ) {

			if ( $result_id ) return;

			// Make sure user is not excluded
			if ( $this->core->exclude_user( $user_id ) ) return;

			$ref_type  = array( 'ref_type' => 'post' );

			if( 
				$this->has_entry( 'completing_h5p_content_general', $content_id, $user_id, $ref_type, $this->mycred_type ) ||
				$this->has_entry( 'completing_h5p_content_specific', $content_id, $user_id, $ref_type, $this->mycred_type )
			) return;

			if( !empty( $this->prefs['content'] ) && in_array( $content_id, $this->prefs['content'] ) ) {

				$hook_index = array_search( $content_id, $this->prefs['content'] );

				if (  
					!empty( $this->prefs['creds'] ) && isset( $this->prefs['creds'][$hook_index] ) &&
					!empty( $this->prefs['log'] ) && !empty( $this->prefs['log'][$hook_index] ) &&
					!empty( $this->prefs['percentage'] ) && isset( $this->prefs['percentage'][$hook_index] )
				) {
					$max_score = floatval( $data['max_score'] );
					$score = floatval( $data['score'] );
					$percentage = ( $score / $max_score ) * 100;

					if ( 
						$this->prefs['percentage'][$hook_index] == 0 || 
						$percentage >= floatval( $this->prefs['percentage'][$hook_index] )
					) {
						// Execute
						$this->core->add_creds(
					        'completing_h5p_content_specific',
					        $user_id,
					        $this->prefs['creds'][$hook_index],
					        $this->prefs['log'][$hook_index],
					        $content_id,
					        $ref_type,
							$this->mycred_type
						);
					}
					
				}
				
			}

		}

		/**
		 * Preference for Anniversary Hook
		 * @since 1.8
		 * @version 1.0
		 */
		public function preferences() {

			$prefs = $this->prefs;

			if ( count( $prefs['creds'] ) > 0 ) {
				$hooks = mycred_h5p_arrange_data( $prefs );
				mycred_h5p_specific_hook_setting( $hooks, $this );
			}
			else {
				$default_data = array(
					array(
						'creds'      => '10',
						'percentage' => '0',
						'log'        => '%plural% for completing a H5P content.',
						'content'    => '0'
					)
				);
				mycred_h5p_specific_hook_setting( $default_data, $this );
			}

		}

	   /**
	   * Sanitize Preferences
	   */
		public function sanitise_preferences( $data ) {

			$new_data = array();

			foreach ( $data as $data_key => $data_value ) {
				foreach ( $data_value as $key => $value) {
					if ( $data_key == 'creds' ) {
						$new_data[$data_key][$key] = ( !empty( $value ) ) ? floatval( $value ) : 10;
					}
					else if ( $data_key == 'percentage' ) {
						$new_data[$data_key][$key] = ( !empty( $value ) ) ? floatval( $value ) : 0;
					}
					else if ( $data_key == 'log' ) {
						$new_data[$data_key][$key] = ( !empty( $value ) ) ? sanitize_text_field( $value ) : '%plural% for completing a H5P content.';
					}
					else if ( $data_key == 'content' ) {
						$new_data[$data_key][$key] = ( !empty( $value ) ) ? intval( $value ) : 0;
					}
				}
			}
			return $new_data;
		}

	}
endif;