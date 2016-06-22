module.exports = {
	"router" : {},
	"db" : {
		"host"     : "127.0.0.1",
		"port"     : 3306,
		"database" : "whatisnode",
		"username" : "",
		"password" : "",
		"options"  : {
			"pool" : {
				"max"  : 5,
				"min"  : 0,
				"idle" : 10000
			}
		}
	}
}