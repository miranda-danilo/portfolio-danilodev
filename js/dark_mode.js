const d = document;
const ls = localStorage;
const moon = "🌙", sun = "☀️";



export default function darkMode(btn, classDark) {
    const $btnDarkColor = d.querySelector(btn),
    $selectores = d.querySelectorAll("[data-dark]"),
    $loadbarBorder = d.querySelectorAll(".load-bar"),
    $contactBtnDarkMode = d.querySelector(".contact__item .button-container__button"),
    $dataWhiteColor = d.querySelectorAll("[data-white-color]");

    const themeLight = () => {
        $selectores.forEach((el)=> el.classList.remove(classDark))
        $dataWhiteColor.forEach((el)=> el.classList.remove("data-text-white"))
        $loadbarBorder.forEach((el)=> el.classList.remove("load-bar-border"));
        $contactBtnDarkMode.classList.remove("darkMode");
        $btnDarkColor.textContent = moon;
        ls.setItem("theme", "light")
}
    const themeDark = () => {
        $selectores.forEach((el)=> el.classList.add(classDark))
        $dataWhiteColor.forEach((el)=> el.classList.add("data-text-white"))
        $loadbarBorder.forEach((el)=> el.classList.add("load-bar-border"));
        $contactBtnDarkMode.classList.add("darkMode");
        $btnDarkColor.textContent = sun;
        ls.setItem("theme", "dark")
}
d.addEventListener("DOMContentLoaded" , e => {
      
  if(!ls.getItem("theme")) {
    ls.setItem("theme", "light")
    } 

    if(ls.getItem("theme") === "light") themeLight();
    if(ls.getItem("theme") === "dark") themeDark();

  
})

    d.addEventListener("click", e => {
     
        if(e.target.matches(btn)) 
        {
          if($btnDarkColor.textContent === moon) {
            themeDark();
          }
          else {
            themeLight();
          }
          
        }
            

      })

     
    }




