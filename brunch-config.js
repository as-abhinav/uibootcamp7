exports.config = {
	files: {
		javascripts: {
			joinTo: {
				'javascripts/app.js'   : /^app/,
				'javascripts/vendor.js': /^(?!app)/
			},
		},
		stylesheets: {joinTo: 'stylesheets/style.css'}
	},
	plugins: {
		babel: {presets: ['es2015', 'react']}
	},
	server : {
		port: 5555
	}
}