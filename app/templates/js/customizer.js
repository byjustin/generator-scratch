!function (a) {
	wp.customize("blogname", function (b) {
		b.bind(function (b) {
			a(".site-title a").text(b)
		})
	}), wp.customize("blogdescription", function (b) {
		b.bind(function (b) {
			a(".site-description").text(b)
		})
	}), wp.customize("header_textcolor", function (b) {
		b.bind(function (b) {
			"blank" === b ? a(".site-title a, .site-description").css({
				clip: "rect(1px, 1px, 1px, 1px)",
				position: "absolute"
			}) : (a(".site-title a, .site-description").css({
				clip: "auto",
				position: "relative"
			}), a(".site-title a, .site-description").css({color: b}))
		})
	})
}(jQuery);
