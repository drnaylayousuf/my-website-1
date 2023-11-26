 
//  carousel slider 
 
 // Set the interval to move to the next slide every 3 seconds
 setInterval(function() {
    // Get the carousel element by ID
    var myCarousel = document.getElementById('carouselExampleCaptions');
    
    // Move to the next slide
    var carousel = new bootstrap.Carousel(myCarousel);
    carousel.next();
  }, 3000); // Adjust the time interval (in milliseconds) as needed

 //  carousel slider 


  // animation of gift box image

// Since we set the number of steps to 4, 
// we need to have 4 images in our sprite.
// Each image has a width of 100px, so the
// sprite's width is 4 times that: 400px.

var spriteWidth = 400;
var steps = 4;

// When the animation starts, we need to know
// the current step (or image) and position the
// sprite accordingly.

var currentStep = 0;
var currentPos = 0;
var speed = 500;

function animate() {
  currentStep = (currentStep + 1) % steps;
  currentPos = (-currentStep * spriteWidth) + 'px';
  document.querySelector('.animation').style.backgroundPosition = currentPos + ' top';
}

setInterval(animate, speed);
    // animation of gift box image







