<?php
/**
 * Plugin Name: myCRED H5P
 * Plugin URI: https://mycred.me
 * Description: myCred H5P integration
 * Version: 1.2
 * Tags: myred, h5p
 * Author: myCRED
 * Author URI: https://www.mycred.me
 * Author Email: support@mycred.me
 * Requires at least: WP 4.8
 * Tested up to: WP 5.7.2
 * Text Domain: mycred_h5p
 */

if ( ! class_exists( 'myCRED_H5P_Core' ) ) :
	final class myCRED_H5P_Core {

		// Plugin Version
		public $version             = '1.2';

		// Instnace
		protected static $_instance = NULL;

		/**
		 * Setup Instance
		 * @since 1.0.4
		 * @version 1.0
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		/**
		 * Define
		 * @since 1.0.4
		 * @version 1.0
		 */
		private function define( $name, $value ) {
			if ( ! defined( $name ) )
				define( $name, $value );
		}

		/**
		 * Require File
		 * @since 1.0.4
		 * @version 1.0
		 */
		public function file( $required_file ) {
			if ( file_exists( $required_file ) )
				require_once $required_file;
		}

		/**
		 * Construct
		 * @since 1.0.4
		 * @version 1.0
		 */
		public function __construct() {
			$this->define_constants();
			$this->init();
		}

		/**
		 * Initialize
		 * @since 1.0
		 * @version 1.0
		 */
		private function init() {

			$this->file( ABSPATH . 'wp-admin/includes/plugin.php' );

			if ( is_plugin_active('mycred/mycred.php') && is_plugin_active('h5p/h5p.php') ) {
				$this->includes();
				add_action( 'wp_enqueue_scripts',    array( $this, 'load_assets' ) );
				add_action( 'admin_enqueue_scripts', array( $this, 'load_admin_assets' ) );
				add_filter( 'mycred_setup_hooks',    array( $this, 'register_hooks' ), 10, 2 );
				add_action( 'mycred_load_hooks',     array( $this, 'load_hooks' ) );
				add_filter( 'mycred_all_references', array( $this, 'register_refrences' ) );
				
				add_filter( 'mycred_badge_requirement', 				  'mycred_h5p_badge_requirement', 10, 5 );
				add_filter( 'mycred_badge_requirement_specific_template', 'mycred_h5p_badge_template', 10, 5 );
	            add_action( 'admin_head',               				  'mycred_h5p_admin_header' );
			}

            add_action( 'admin_notices',         array( $this, 'required_plugin_notices' ) );

		}

		/**
		 * Define Constants
		 * @since 1.1.1
		 * @version 1.0
		 */
		private function define_constants() {

			$this->define( 'MYCRED_H5P_VERSION',        $this->version );
			$this->define( 'MYCRED_H5P_SLUG',           'mycred-h5p' );
			$this->define( 'MYCRED_H5P',                __FILE__ );
			$this->define( 'MYCRED_H5P_ROOT_DIR',       plugin_dir_path( MYCRED_H5P ) );
			$this->define( 'MYCRED_H5P_ASSETS_DIR_URL', plugin_dir_url( MYCRED_H5P ) . 'assets/' );
			$this->define( 'MYCRED_H5P_INCLUDES_DIR',   MYCRED_H5P_ROOT_DIR . 'includes/' );

		}

		/**
		 * Include Plugin Files
		 * @since 1.1.1
		 * @version 1.0
		 */
		public function includes() {

			$this->file( MYCRED_H5P_INCLUDES_DIR . 'mycred-h5p-functions.php' );

		}

		/**
		 * Include Hook Files
		 * @since 1.1.1
		 * @version 1.0
		 */
		public function load_hooks() {

			$this->file( MYCRED_H5P_INCLUDES_DIR . 'mycred-h5p-specific-hook.php' );
			$this->file( MYCRED_H5P_INCLUDES_DIR . 'mycred-h5p-general-hook.php' );

		}

		public function load_assets() {}

		public function load_admin_assets( $hook ) {	
			if ( is_mycred_hook_page( $hook ) ) {
				wp_enqueue_script( 
					'mycred_h5p_admin_script', 
					MYCRED_H5P_ASSETS_DIR_URL . 'js/script.js', 
					array( 'jquery' ), 
					'1.0' 
				);
				wp_enqueue_style( 
					'mycred_h5p_admin_style', 
					MYCRED_H5P_ASSETS_DIR_URL . 'css/style.css', 
					array(), 
					'1.0' 
				);
			}
		}


		public function register_hooks( $installed ) {

			$installed['completing_h5p_content_specific'] = array(
				'title'       => __('%plural% for Completing H5P Specific Content', 'mycred_h5p'),
				'description' => __('Adds a myCRED hook for tracking points scored in H5P content.', 'mycred_h5p'),
				'callback'    => array('myCRED_H5P_Specific_Hook')
			);
			$installed['completing_h5p_content_general'] = array(
				'title'       => __('%plural% for Completing H5P Content', 'mycred_h5p'),
				'description' => __('Adds a myCRED hook for tracking points scored in H5P content.', 'mycred_h5p'),
				'callback'    => array('myCRED_H5P_General_Hook')
			);

			return $installed;
		}


		public function register_refrences( $list ) {

			$list['completing_h5p_content_general']  = __('Completing H5P Content General', 'mycred_h5p');
			$list['completing_h5p_content_specific'] = __('Completing H5P Content Specific', 'mycred_h5p');
			return $list;
		}


		public function required_plugin_notices() {
 
			$msg = __( 'need to be active and installed to use myCred H5P plugin.', 'mycred_h5p' );
			
			if ( !is_plugin_active('mycred/mycred.php') ) {
				printf( '<div class="notice notice-error"><p><a href="https://wordpress.org/plugins/mycred/">%1$s</a> %2$s</p></div>', __( 'myCred', 'mycred_h5p' ), esc_html( $msg ) );
			}
			if ( !is_plugin_active('h5p/h5p.php') ) {
				$h5p_msg = __( 'H5P need to be active and installed to use myCred H5P plugin.', 'mycred_h5p' );
				printf( '<div class="notice notice-error"><p><a href="https://wordpress.org/plugins/h5p/">%1$s</a> %2$s</p></div>', __( 'H5P', 'mycred_h5p' ), esc_html( $msg ) );
			}
		}

	}
endif;

function mycred_h5p_core() {
	return myCRED_H5P_Core::instance();
}
mycred_h5p_core();