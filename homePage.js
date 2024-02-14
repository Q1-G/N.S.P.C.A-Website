
    document.addEventListener("DOMContentLoaded", function () {
    
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    
    const toastContainer = document.querySelector(".toastContainer");
    const exitButton = document.querySelector(".exitButton");

    setTimeout(function () {
        const toastBody = document.querySelector(".toastBody");
        toastBody.style.display = "block";
    }, 5000);

    window.addEventListener("scroll", function () {
        toastContainer.style.top = window.scrollY + "px";
    });

    exitButton.addEventListener("click", function () {
        toastContainer.style.display = "none";
    });
});


    document.addEventListener("DOMContentLoaded", function () {
  
        const timestampElement = document.getElementById("timestamp");
  
  
        const currentDate = new Date();
  
  
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
  
        timestampElement.textContent = '\u00A9 ' + formattedDate + ' | N.S.P.C.A';
    });
