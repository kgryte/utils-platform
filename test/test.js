/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	platform = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-platform', function tests() {

	it( 'should export a string', function test() {
		expect( platform ).to.be.a( 'string' );
	});

	it( 'should alias `process.platform`', function test() {
		assert.strictEqual( platform, process.platform );
	});

});
