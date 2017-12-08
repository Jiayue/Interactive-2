
           function displayNextImage() {
               x = (x === images.length - 1) ? 0 : x + 1;
               document.getElementById("img").src = images[x];
           }

           function displayPreviousImage() {
               x = (x <= 0) ? images.length - 1 : x - 1;
               document.getElementById("img").src = images[x];
           }

           function startTimer() {
               setInterval(displayNextImage, 1000);
           }

           var images = [], x = -1;
           images[0] = "W1.jpg";
           images[1] = "W2.jpg";
           images[2] = "W3.jpg";
           images[3] = "W4.jpg";
           images[4] = "W5.jpg";
