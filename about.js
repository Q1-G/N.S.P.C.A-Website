document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonials[currentIndex].classList.remove("active");
      testimonials[index].classList.add("active");
      currentIndex = index;
    }
  
    function nextTestimonial() {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(nextIndex);
    }
  
    function prevTestimonial() {
      const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(prevIndex);
    }
  
   
    showTestimonial(currentIndex);
  

    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
  
    nextButton.addEventListener("click", nextTestimonial);
    prevButton.addEventListener("click", prevTestimonial);
  });

  
  document.addEventListener("DOMContentLoaded", function () {

    const timestampElement = document.getElementById("timestamp");


    const currentDate = new Date();


    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);


    timestampElement.textContent = '\u00A9 ' + formattedDate + ' | N.S.P.C.A';
});


  
  
  
  