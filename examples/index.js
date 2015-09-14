'use strict';

var platform = require( './../lib' );

if ( platform === 'win32' ) {
	console.log( 'Running on a PC...' );
}
else if ( platform === 'darwin' ) {
	console.log( 'Running on a Mac...' );
}
else {
	console.log( 'Running on something else...' );
}
