exports.config = {
	paths    : {
		watched: ['app', 'test']
	},
	files    : {
		javascripts: {
			joinTo: {
				'javascripts/vendor.js': /^(?!app|test)/,
				'javascripts/app.js'   : /^app/,
				'test.js'              : /^test/
			},
		},
		stylesheets: {joinTo: 'stylesheets/style.css'}
	},
	plugins  : {
		babel: {presets: ['es2015', 'react']}
	},
	server   : {
		port: 5555
	}
}