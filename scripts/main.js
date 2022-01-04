   window.onload = () => {
       let iconsHeartSvg = document.querySelectorAll(".svg");

       iconsHeartSvg.forEach(icon => {
           icon.addEventListener("click", (e) => {
               icon.classList.toggle("active");
               console.log('clicou');
           });
       });
   }