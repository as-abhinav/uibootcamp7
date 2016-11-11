exports.config = {
	files    : {
		javascripts: {
			joinTo: {
				'javascripts/vendor.js': /^(?!app|test)/,
				'javascripts/app.js'   : /^app/
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