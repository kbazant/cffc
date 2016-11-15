$(document).ready(function () {

	//	CELSIUS FUNCTION

	$("#c").on("input", function () {
		var value = $(this).val();

		//    1. Temperature of -20C or less
		if (value < -19)
			$(".wrapper").css({
				backgroundImage: "url(images/arctic-cold.jpg)"
			});

		//    2. Temperature between -19C and -10C
		else if (value > -20 && value < -9)
			$(".wrapper").css({
				backgroundImage: "url(images/winter-mountain-landscape.jpg)"
			});

		//		3. Temperature between -9C and 0C
		else if (value > -10 && value < 1)
			$(".wrapper").css({
				backgroundImage: "url(images/snowboarding.jpg)"
			});

		//		4. Temperature between 1C and 10C
		else if (value > 0 && value < 11)
			$(".wrapper").css({
				backgroundImage: "url(images/fall-autumn-season.jpg)"
			});

		//		5. Temperature between 11C and 20C
		else if (value > 10 && value < 21)
			$(".wrapper").css({
				backgroundImage: "url(images/cherry-blossom.jpg)"
			});

		//		6. Temperature between 21C and 30C
		else if (value > 19 && value < 31)
			$(".wrapper").css({
				backgroundImage: "url(images/tropical-beach-and-palm-tree.jpg)"
			});

		//		7. Temperature of +31C or more
		else if (value > 30)
			$(".wrapper").css({
				backgroundImage: "url(images/desert-africa.jpg)"
			});

	})


	//	FAHRENHEIT FUNCTION


	$("#f").on("input", function () {
		var value = $(this).val();

		//    1. Temperature of -20C or less = Fahrenheit -4 or less
		if (value < -2)
			$(".wrapper").css({
				backgroundImage: "url(images/arctic-cold.jpg)"
			});

		//    2. Temperature between -19C and -10C = Fahrenheit between -19 and 14
		else if (value > -20 && value < -9)
			$(".wrapper").css({
				backgroundImage: "url(images/winter-mountain-landscape.jpg)"
			});

		//		3. Temperature between -9C and 0C = Fahrenheit between 
		else if (value > -10 && value < 1)
			$(".wrapper").css({
				backgroundImage: "url(images/snowboarding.jpg)"
			});

		//		4. Temperature between 1C and 10C = Fahrenheit between 
		else if (value > 0 && value < 11)
			$(".wrapper").css({
				backgroundImage: "url(images/fall-autumn-season.jpg)"
			});

		//		5. Temperature between 11C and 19C = Fahrenheit between 
		else if (value > 10 && value < 21)
			$(".wrapper").css({
				backgroundImage: "url(images/cherry-blossom.jpg)"
			});

		//		6. Temperature between 20C and 29C = Fahrenheit between 
		else if (value > 19 && value < 31)
			$(".wrapper").css({
				backgroundImage: "url(images/tropical-beach-and-palm-tree.jpg)"
			});

		//		7. Temperature of +31C or more = Fahrenheit or more
		else if (value > 30)
			$(".wrapper").css({
				backgroundImage: "url(images/desert-africa.jpg)"
			});

	})


})