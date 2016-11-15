////image change testing
//
//window.onload = function() { // because we are grabbing DOM elements we need to ensure the elements are first loaded.
//    var elm = document.getElementById("c"),
//        img = document.getElementById("myimg"); // here we grab the input box and the image
//    elm.onkeyup = function(event) { // capture the input keyup
//        console.log(this.value.length);
//        if (this.value.length === 1) { // make sure we are only checking the first value
//            switch (event.keyCode) { // here we are running the switch statement against the keyup event keycode value
//            case (<10): 
//                img.src = "images/desert-africa.jpg";
//                break;
//            case (>=11):
//                 img.src = "images/arctic-cold.jpg";
//                break;
//            case (>=20):
//                 img.src = "images/cherry-blossom.jpg";
//                break;
//            }
//        }
//    }
//
//}

$(document).ready(function() {
  
  $("#c").on("input",function(){
    var value = $(this).val();
		
//    1. Temperature of -20C or less
    if (value < -19) 
      $(".wrapper").css({backgroundImage:"url(images/arctic-cold.jpg)"});
		
//    2. Temperature between -19C and -10C
    else if (value > -20 && value < -9)
      $(".wrapper").css({backgroundImage:"url(images/winter-mountain-landscape.jpg)"});
		
//		3. Temperature between -9C and 0C
		else if (value > -10 && value < 1)
      $(".wrapper").css({backgroundImage:"url(images/snowboarding.jpg)"});
		
//		4. Temperature between 1C and 10C
		else if (value > 0 && value < 11)
      $(".wrapper").css({backgroundImage:"url(images/fall-autumn-season.jpg)"});
		
//		5. Temperature between 11C and 19C
		else if (value > 10 && value < 21)
      $(".wrapper").css({backgroundImage:"url(images/cherry-blossom.jpg)"});
		
//		6. Temperature between 20C and 29C
		else if (value > 19 && value < 31)
      $(".wrapper").css({backgroundImage:"url(images/tropical-beach-and-palm-tree.jpg)"});
		
//		7. Temperature of +30C or more
		else if (value > 30)
      $(".wrapper").css({backgroundImage:"url(images/desert-africa.jpg)"});
            
        })
	
	
//	$("#f").on("input",function(){
//    var value = $(this).val();
//		
////    1. Temperature of -20C or less
//    if (value <= "1") 
//      $(".wrapper").css({backgroundImage:"url(images/arctic-cold.jpg)"});
//		
//
//            
//        })
	
	
	
                
    })


//  1. <= -20**
//	2. -19 - -10**
//	3. -9 - 0**
//	4. 1 - 10**
//	5. 11 - 19**
//	6. 20 - 30
//	7. 30 =>





//	The image change depending on temperature:
//	1. <= -20
//	2. -19 - -10
//	3. -9 - 0
//	4. 1 - 10
//	5. 11 - 19
//	6. 20 - 30
//	7. 30 =>





//<div class="jp-front">
//  <input type="text" name="" class="credit-input">
//</div>
