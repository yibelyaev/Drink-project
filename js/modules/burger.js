const menuBurger=document.querySelector(".menu__burger"),list=document.querySelector(".menu__list"),initMenu=()=>{menuBurger.addEventListener("click",(()=>{let e="true"===menuBurger.getAttribute("aria-expanded");menuBurger.setAttribute("aria-expanded",!e),e?menuBurger.setAttribute("aria-label","Открыть меню"):menuBurger.setAttribute("aria-label","Закрыть меню"),list.classList.toggle("menu__list--opened"),menuBurger.classList.toggle("menu__burger--opened")}))};export default initMenu;