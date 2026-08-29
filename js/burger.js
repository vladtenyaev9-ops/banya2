const burgerBtn = document.querySelector(".header__burger-btn");
const body = document.querySelector(".page__body");

const createBurgerMenu = () => {
  const menu = document.createElement("nav");
  menu.classList.add("burger-menu");
  menu.innerHTML = `
    <div class="header_btn-close-wrap">
      <button
        class="header__burger-btn-close"
        type="button"
        aria-label="Закрыть меню"
      >
        close
      </button>
    </div>
    <ul class="burger-menu__list">
      <li><a class="burger-menu__link" href="#dom">Дом</a></li>
      <li><a class="burger-menu__link" href="#ritual">Ритуал</a></li>
      <li><a class="burger-menu__link" href="#formats">Форматы</a></li>
      <li><a class="burger-menu__link" href="#gallery">Галерея</a></li>
      <li><a class="burger-menu__link" href="#contact">Контакты</a></li>
    </ul>
  `;
  body.append(menu);
  return menu;
};

const burgerMenu = createBurgerMenu();

// ИЩЕМ КНОПКУ ПОСЛЕ СОЗДАНИЯ МЕНЮ
const closeBtn = document.querySelector(".header__burger-btn-close");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.add("burger--open");
  burgerBtn.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  burgerMenu.classList.remove("burger--open");
  burgerBtn.classList.remove("active");
  document.body.style.overflow = "";
});

const menuLinks = document.querySelectorAll(".burger-menu__link");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("burger--open");
    burgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  });
});

document.addEventListener("click", event => {
  const isClickInsideMenu = burgerMenu.contains(event.target);
  const isClickOnBurger = burgerBtn.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnBurger &&
    burgerMenu.classList.contains("burger--open")
  ) {
    burgerMenu.classList.remove("burger--open");
    burgerBtn.classList.remove("active");
    document.body.style.overflow = "";
  }
});
