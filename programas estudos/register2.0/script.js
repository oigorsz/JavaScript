const mode = document.getElementById("mode_icon");
const form = document.getElementById("login_form")

mode.addEventListener("click", dark)

function dark(){
   if (mode.classList.contains("fa-moon")){
      mode.classList.remove("fa-moon");
      mode.classList.add("fa-sun")

      form.classList.add("dark");
      
   } else {
      mode.classList.remove("fa-sun");
      mode.classList.add("fa-moon");
      form.classList.remove("dark");
   }
}