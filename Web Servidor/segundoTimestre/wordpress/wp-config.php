<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$9FF]5/_]fXh+>9M:@KHZ73nE~+}ym)Y!2FE^LQOQ,o.VsOb[#x*Le}foZI;@-2b' );
define( 'SECURE_AUTH_KEY',  '4a7z0H5Sir9pTT/Cspj-AS`UUOCvtEpx; =#s[7?&Jg7{K.<+[4&F`Yx&O/Ty.!9' );
define( 'LOGGED_IN_KEY',    ')tRDj _|;%yd{4D28M~H$tB85Z^c-bf,s8iDkWml.fOlOP#-/ER:1EUZZ!(!,+<=' );
define( 'NONCE_KEY',        '>u,b1H.T^29J6a?EqIyBG&ze=U`==,.P+[yljgDFDu^IY;-&K#^i#hQ>r;*K7>P;' );
define( 'AUTH_SALT',        '=fRB!9Q5[yO8s8[f5;Q6y[f%WJsMja6cjk>z3$cY044gsnXs*H[?I+a4kD_}dg#R' );
define( 'SECURE_AUTH_SALT', 'm#[kZJ[W%J?|7s<5_e0$9fR(kD+ZE:+jxLRdvKw|[n9y6/`OY$mLKU!8Bzz!)Dr0' );
define( 'LOGGED_IN_SALT',   '4Fvh;Gv4~(,(>d|:7dB~]5M/R;?{O{<^(JCvE[oWwZ<CYjb<V~bXOpdsAQ_]x$Uh' );
define( 'NONCE_SALT',       'kW5iH9tka$yU&Vz/{(@d#0<Uk/SbE^zGpgL6-#$d55kVK!z^AQ`%1C3x({3fB-g1' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
