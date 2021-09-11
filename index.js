const show = document.getElementById("show");
const hide = document.getElementById("hide");

show.addEventListener("click", function(){
   if (hide.style.display === 'none'){
        hide.style.display = 'block';
   } else {
        hide.style.display = 'none';
   }
});
