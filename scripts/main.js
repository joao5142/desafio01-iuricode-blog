
       const iconsHeartSvg = document.querySelectorAll(".svg");

       iconsHeartSvg.forEach(icon => {
           icon.addEventListener("click", () => {
               icon.classList.toggle("active");
              
           });
       });
