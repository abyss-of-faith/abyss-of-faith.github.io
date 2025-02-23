const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu li');
const menuArrow = document.getElementById('menu-arrow');
let currentMenuItemIndex = 0;
let isMenuOpen = false;

function updateMenuArrowPosition() {
    menuArrow.style.top = (currentMenuItemIndex * 30 + 10) + 'px'; // 30 - высота пункта меню + отступ
}

function updateActiveClass() {
    menuItems.forEach((item, index) => {
        if (index === currentMenuItemIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    updateMenuArrowPosition();
}

function openMenu() {
  menu.classList.remove('menu-hidden');
  menu.classList.add('menu-visible');
  isMenuOpen = true;
  updateActiveClass(); // Устанавливаем активный класс при открытии меню
}

function closeMenu() {
  menu.classList.remove('menu-visible');
  menu.classList.add('menu-hidden');
  isMenuOpen = false;
}

// Обработчик нажатия клавиши Space
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { // Проверяем event.code, а не event.key
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    }
    if (isMenuOpen) {
        if (event.key === 'ArrowUp') {
            currentMenuItemIndex = (currentMenuItemIndex - 1 + menuItems.length) % menuItems.length;
            updateActiveClass();
        } else if (event.key === 'ArrowDown') {
            currentMenuItemIndex = (currentMenuItemIndex + 1) % menuItems.length;
            updateActiveClass();
        } else if (event.key === 'Enter') {
            // Выполняем действие для выбранного пункта меню
            console.log("Выбран пункт меню:", menuItems[currentMenuItemIndex].textContent);
            // Здесь добавь код для обработки выбора пункта меню (например, начать новую игру, открыть настройки и т.д.)
            handleMenuItemSelection(menuItems[currentMenuItemIndex].textContent);
        }
    }
});

// Функция обработки выбора пункта меню
function handleMenuItemSelection(selectedItem) {
    switch (selectedItem) {
        case 'New Run':
            console.log("Начинаем новую игру!");
            // Добавь код для начала новой игры
            break;
        case 'Continue':
            console.log("Продолжаем игру!");
            // Добавь код для продолжения игры
            break;
        case 'Challenges':
            console.log("Открываем Challenges!");
            // Добавь код для открытия Challenges
            break;
        case 'Stats':
            console.log("Открываем Stats!");
            // Добавь код для открытия Stats
            break;
        case 'Options':
            console.log("Открываем Options!");
            // Добавь код для открытия Options
            break;
        default:
            console.log("Неизвестный пункт меню");
    }
    closeMenu(); // Закрываем меню после выбора пункта
}
