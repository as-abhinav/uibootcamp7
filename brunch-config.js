exports.config = {
	files    : {
		javascripts: {
			joinTo: {
				'javascripts/vendor.js': /^(?!app)/,
				'javascripts/app.js'   : /^app/
			},
		},
		stylesheets: {joinTo: 'stylesheets/style.css'}
	},
	conventions: {
		ignored: [
			/^test/
		],
	},
	plugins  : {
		babel: {presets: ['es2015', 'react']}
	},
	server   : {
		port: 5555
	}
}