$(document).ready(function () {

	// Images

	var images = ["url(images/arctic-cold.jpg)",
								"url(images/winter-mountain-landscape.jpg)",
							 	"url(images/snowboarding.jpg)",
								"url(images/fall-autumn-season.jpg)",
								"url(images/cherry-blossom.jpg)",
								"url(images/tropical-beach-and-palm-tree.jpg)",
								"url(images/desert-africa.jpg)"
							 ];


	function findImage(temp) {
		temp = parseInt(temp)
		return (temp < -19) ? 0 :
			(temp > 40) ? 6 :
			Math.floor((29 + temp) / 10);
	}


	//	CELSIUS FUNCTION

	$("#c").on("input", function () {
		var value = $(this).val();
		$(".wrapper").css({
			backgroundImage: images[findImage(value)]
		});
	})


	//	FAHRENHEIT FUNCTION

	$("#f").on("input", function () {
		var value = $(this).val();
		$(".wrapper").css({
			backgroundImage: images[findImage(value * 9 / 5 + 32)]
		});

	})

})