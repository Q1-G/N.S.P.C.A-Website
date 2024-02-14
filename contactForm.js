document.addEventListener("DOMContentLoaded", function () {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    
    function handleFocus(event) {
        const field = event.target;
        field.placeholder = "";
    }

   
    function handleBlur(event) {
        const field = event.target;
        if (field.value === "") {
            field.placeholder = "Enter your " + field.name;
        }
    }


    nameField.addEventListener("focus", handleFocus);
    nameField.addEventListener("blur", handleBlur);

    emailField.addEventListener("focus", handleFocus);
    emailField.addEventListener("blur", handleBlur);

    messageField.addEventListener("focus", handleFocus);
    messageField.addEventListener("blur", handleBlur);

    
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");
        const navbar = document.querySelector(".navbar");

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    });
    
        document.addEventListener("DOMContentLoaded", function () {
    
            const timestampElement = document.getElementById("timestamp");
      
      
            const currentDate = new Date();
      
      
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
            const formattedDate = currentDate.toLocaleDateString('en-US', options);
      
      
            timestampElement.textContent = '\u00A9 ' + formattedDate + ' | N.S.P.C.A';
        });
      
  });