//image change testing

window.onload = function() { // because we are grabbing DOM elements we need to ensure the elements are first loaded.
    var elm = document.getElementById("c"),
        img = document.getElementById("myimg"); // here we grab the input box and the image
    elm.onkeyup = function(event) { // capture the input keyup
        console.log(this.value.length);
        if (this.value.length === 1) { // make sure we are only checking the first value
            switch (event.keyCode) { // here we are running the switch statement against the keyup event keycode value
            case (48): 
                img.src = "http://dummyimage.com/100x100/000/fff&text=0";
                break;
            case (49):
                 img.src = "images/arctic-cold.jpg";
                break;
            case (50):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=2";
                break;
            case (51):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=3";
                break;
            case (52):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=4";
                break;
            case (53):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=5";
                break;
            case (54):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=6";
                break;
            case (55):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=7";
                break;
            case (56):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=8";
                break;
            case (57):
                 img.src = "http://dummyimage.com/100x100/000/fff&text=9";
                break;
            }
        }
    }

}