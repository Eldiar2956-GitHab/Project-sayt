"use strict";
const animation = document.getElementById('animatsion');
const siteContent = document.getElementById('siteContent');
const form = document.getElementById('form');
const glavBoxs = document.querySelector('.glav_boxs');
glavBoxs.classList.add('active');
const profilName = document.querySelector('.Profil_name');
const profilEmail = document.querySelector('.Profil_email');
const profilTelefon = document.querySelector('.Profil_telefon');
if (animation) {
    setTimeout(() => {
        animation.style.display = 'none';
        document.body.style.backgroundColor = 'white';
        setTimeout(() => {
            form.style.display = 'flex';
            document.body.style.backgroundColor = '#2774AE';
        }, 10);
    }, 3000);
}
else {
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById("password");
    let telefon = document.getElementById("telefon");
    const clearError = () => {
        document.querySelectorAll('.error-text').forEach(error => error.remove());
    };
    const ErrorInfo = (input, message) => {
        var _a;
        let ErrorEL = document.createElement('div');
        ErrorEL.className = 'error-text';
        ErrorEL.textContent = message;
        ErrorEL.style.fontSize = '14px';
        ErrorEL.style.color = 'red';
        (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(ErrorEL);
    };
    clearError();
    if (!name.value.trim()) {
        ErrorInfo(name, 'Введите имя');
        isValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        ErrorInfo(email, 'Введите коректный email');
        isValid = false;
    }
    if (password.value.trim().length < 6) {
        ErrorInfo(password, 'Пароль должень быть не мене 6 символов');
        isValid = false;
    }
    if (telefon.value.trim() === '' && !/^[0,9]{10,15}/.test(telefon.value.trim())) {
        ErrorInfo(telefon, 'Заполните поле вода');
        isValid = false;
    }
    function newSlider() {
        if (name.value.trim().length > 0 && email.value.trim().length > 0 && password.value.trim().length > 6 && telefon.value.trim().length > 0) {
            setTimeout(() => {
                form.style.display = 'none';
                document.body.style.backgroundColor = 'white';
                siteContent.style.display = 'block';
            }, 50);
        }
    }
    newSlider();
    if (isValid) {
        console.log(`Форма успешна отправлена
                        Имя:${name.value}
                        Email:${email.value}
                        Пароль:${password.value}
                        Телефон:${telefon.value}`);
        const username = document.getElementById('user-name');
        const useremail = document.getElementById('user-email');
        const usertelefon = document.getElementById('user-phone');
        useremail.appendChild(email);
        username.appendChild(name);
        usertelefon.appendChild(telefon);
        username.textContent = `${name.value}`;
        useremail.textContent = `${email.value}`;
        usertelefon.textContent = `${telefon.value}`;
    }
    name.value = '';
    email.value = '';
    password.value = '';
    telefon.value = '';
    glavBoxs.classList.remove('active');
});
// бургер меню
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
    else {
        navLinks.classList.add('active');
    }
});
//второй бургер меню на странитцу товара 
const burgerMeny2 = document.getElementById('burger2');
const newLinks = document.getElementById('navLinks2');
//третий бургем меню на странитцу смартфоны
const burgerMeny3 = document.getElementById('burger3');
const navLinks3 = document.getElementById('navLinks3');
burgerMeny2.addEventListener('click', () => {
    if (newLinks.classList.contains('active')) {
        newLinks.classList.remove('active');
    }
    else
        (newLinks.classList.add('active'));
});
burgerMeny3.addEventListener('click', () => {
    if (navLinks3.classList.contains('active')) {
        navLinks3.classList.remove('active');
    }
    else
        (navLinks3.classList.add('active'));
});
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!burger.contains(target) && !navLinks.contains(target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        document.body.classList.remove('active');
    }
    if (!burgerMeny2.contains(target) && !newLinks.contains(target) && newLinks.classList.contains('active')) {
        newLinks.classList.remove('active');
        document.body.classList.remove('active');
    }
    if (!burgerMeny3.contains(target) && !navLinks3.contains(target) && navLinks3.classList.contains('active')) {
        navLinks3.classList.remove('active');
        document.body.classList.remove('active');
    }
});
//скроол направо и на лево Каталога
// 
function setupScroll(container, btnLeft, btnRight) {
    function updateButtons() {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        if (scrollLeft === 0) {
            btnLeft.style.display = 'none';
        }
        else {
            btnLeft.style.display = 'block';
        }
        if (scrollLeft >= scrollWidth - clientWidth - 1) {
            btnRight.style.display = 'none';
        }
        else {
            btnRight.style.display = 'block';
        }
    }
    container.addEventListener('scroll', updateButtons);
    updateButtons();
    btnLeft.addEventListener('click', () => {
        container.scrollBy({ left: -150, behavior: 'smooth' });
    });
    btnRight.addEventListener('click', () => {
        container.scrollBy({ left: 150, behavior: 'smooth' });
    });
}
const scrolContainer = document.getElementById('scrol-bar');
const scrolLeft = document.getElementById('srcol-left');
const scrolRight = document.getElementById('scrol-rigt');
const scrolContainerAcsiy = document.getElementById('scrol-bar-acsiy');
const scrolLeftAcsia = document.getElementById('srcol-left-acsia');
const scrolRightAcsia = document.getElementById('scrol-rigt-acsia');
const scrolConteynerPhone = document.querySelector('.otzyv_img');
const scrolleftPhone = document.getElementById('left-otzyv');
const scrolrigtPhone = document.getElementById('rigt-otzyv');
setupScroll(scrolContainer, scrolLeft, scrolRight);
setupScroll(scrolContainerAcsiy, scrolLeftAcsia, scrolRightAcsia);
setupScroll(scrolConteynerPhone, scrolleftPhone, scrolrigtPhone);
//Работа изобрадение
document.addEventListener('DOMContentLoaded', () => {
    const loveButtons = document.querySelectorAll('.love-button');
    loveButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.currentTarget;
            const lovePath = clickedButton.querySelector('.love');
            if (lovePath) {
                lovePath.classList.toggle('active');
                if (lovePath.classList.contains('active')) {
                    // console.log('Добавлено в избранное ❤️');
                }
                else {
                    // console.log('Удалено из избранного 💔');
                }
            }
            else {
                console.error('Элемент .love (путь сердца) не найден внутри кнопки "избранное".');
            }
        });
    });
});
// Заход на каталог телефона 
//
const newSayt = document.getElementById('new_sayt');
const infoTovar = document.getElementById('contaynPhone');
//нужен в дальнейшом 
// newSayt.addEventListener('click', () => {
//   glavBoxs.classList.add('active');
//   proverca=false
//   setTimeout(() => {
//     infoTovar.classList.add('active');
//   }, 500);
// });
newSayt.addEventListener('click', () => {
    glavBoxs.classList.add('active');
    setTimeout(() => {
        infoTovar.classList.add('active');
    }, 500);
});
// работа с историе захода на странитцу
//История прокрутки перед назад
const scitca = document.getElementById('discountPhones');
const back = document.getElementById('back');
const Go = document.getElementById('go');
back.addEventListener('click', () => {
    window.history.back();
    if (window.location.href === 'http://127.0.0.1:5501/index.html') {
        newSayt.classList.remove('active');
        glavBoxs.classList.remove('active');
    }
});
// Go.addEventListener('click',()=>{
//   window.history.forward()
// })
const boxsProfil = document.querySelector('.Profil');
const profil = document.querySelector('.button_profil');
const shop = document.querySelector('.Boxs_Shop');
//часть Смартфона кнопка назад
const backSmart = document.getElementById('phone_back');
backSmart === null || backSmart === void 0 ? void 0 : backSmart.addEventListener('click', () => {
    if (window.location.href === 'http://127.0.0.1:5501/index.html#Phone') {
        shop === null || shop === void 0 ? void 0 : shop.classList.remove('active');
        boxsProfil === null || boxsProfil === void 0 ? void 0 : boxsProfil.classList.remove('active');
        newSayt.classList.remove('active');
        glavBoxs.classList.remove('active');
        infoTovar.classList.remove('active');
        PhoneBoxs.classList.remove('active');
    }
});
const PhoneBoxs = document.querySelector('.Phone_Boxs');
const Phone = document.querySelector('.Phone');
//История прокрутки перед назад
window.onpopstate = function (event) {
    if (window.location.href === 'http://127.0.0.1:5501/index.html') {
        shop === null || shop === void 0 ? void 0 : shop.classList.remove('active');
        boxsProfil === null || boxsProfil === void 0 ? void 0 : boxsProfil.classList.remove('active');
        newSayt.classList.remove('active');
        glavBoxs.classList.remove('active');
        infoTovar.classList.remove('active');
        PhoneBoxs.classList.remove('active');
    }
    else if (window.location.href === 'http://127.0.0.1:5501/index.html#contaynPhone') {
        shop === null || shop === void 0 ? void 0 : shop.classList.remove('active');
        boxsProfil === null || boxsProfil === void 0 ? void 0 : boxsProfil.classList.remove('active');
        newSayt.classList.add('active');
        glavBoxs.classList.add('active');
        infoTovar.classList.add('active');
        PhoneBoxs.classList.remove('active');
    }
    else if (window.location.href === 'http://127.0.0.1:5501/index.html#Phone') {
        shop === null || shop === void 0 ? void 0 : shop.classList.remove('active');
        boxsProfil === null || boxsProfil === void 0 ? void 0 : boxsProfil.classList.remove('active');
        infoTovar.classList.remove('active');
        newSayt.classList.remove('active');
        PhoneBoxs.classList.remove('active');
        glavBoxs.classList.add('active');
        PhoneBoxs.classList.add('active');
    }
    else if (window.location.href === 'http://127.0.0.1:5501/index.html#Profil') {
        shop === null || shop === void 0 ? void 0 : shop.classList.remove('active');
        boxsProfil === null || boxsProfil === void 0 ? void 0 : boxsProfil.classList.add('active');
        infoTovar.classList.remove('active');
        glavBoxs.classList.add('active');
        newSayt.classList.add('active');
        PhoneBoxs.classList.remove('active');
    }
    else if (window.location.href === 'http://127.0.0.1:5501/index.html#Shop') {
        boxsProfil === null || boxsProfil === void 0 ? void 0 : boxsProfil.classList.remove('active');
        infoTovar.classList.remove('active');
        glavBoxs.classList.add('active');
        newSayt.classList.add('active');
        PhoneBoxs.classList.remove('active');
        shop === null || shop === void 0 ? void 0 : shop.classList.add('active');
    }
};
const info_history = document.querySelector('.Smartfon');
const Colonca = document.querySelector('.Colonca');
const Pc = document.querySelector('.PC');
const Tv = document.querySelector('.TV');
const plamshet = document.querySelector('.planshet');
// работа прехода по странитце проверкой по айпи имений
const historyDiv = document.querySelector('.history');
function provercaHistory() {
    const a = document.createElement('a');
    a.className = 'info_history_sayt';
    a.style.fontSize = '17px';
    a.style.color = 'blur';
    a.style.display = 'block';
    const activA = document.createElement('a');
    a.className = 'activ_a';
    a.style.fontSize = '20px';
    a.style.color = 'black';
    a.style.display = 'block';
    a.style.fontWeight = '600';
    //требует даработок 
    if (window.location.href === 'http://127.0.0.1:5501/index.html#Phone') {
        a.href = `${window.location.pathname}`;
        a.textContent = 'Главная';
        activA.href = `${window.location.pathname}`;
        activA.textContent = '/Смартфон';
    }
    historyDiv.appendChild(a);
    a.appendChild(activA);
    //привязывать надо от сюда тоест привизать к одному элементу
    if (window.location.href === 'http://127.0.0.1:5501/index.html#contaynPhone') {
        a.href = `${window.location.pathname}`;
        a.textContent = 'Главная';
        activA.href = `${window.location.pathname}`;
        activA.textContent = '/Смартфон';
    }
    info_history.appendChild(a);
    a.appendChild(activA);
}
provercaHistory();
//
const btn = document.querySelector('.toggle-btn');
const content = document.querySelector('.content');
btn.addEventListener('click', () => {
    content.classList.toggle('open');
    if (content.classList.contains('open')) {
        btn.textContent = 'Скрыть текст';
    }
    else {
        btn.textContent = 'Показать текст';
    }
});
//Работа с каталогом товаров
const ScytInfoText = document.getElementById('scryt');
const boxsText = document.getElementById('boxs');
ScytInfoText.addEventListener('click', () => {
    if (boxsText.classList.contains('active')) {
        boxsText.classList.remove('active');
    }
    else {
        boxsText.classList.add('active');
    }
});
const ScytInfoText2 = document.getElementById('scyt_text');
const boxsText2 = document.getElementById('boxs2');
ScytInfoText2.addEventListener('click', () => {
    if (boxsText2.classList.contains('active')) {
        boxsText2.classList.remove('active');
    }
    else {
        boxsText2.classList.add('active');
    }
});
const ScytInfoText3 = document.getElementById('scyt_text2');
const boxsText3 = document.getElementById('boxs3');
ScytInfoText3.addEventListener('click', () => {
    if (boxsText3.classList.contains('active')) {
        boxsText3.classList.remove('active');
    }
    else {
        boxsText3.classList.add('active');
    }
});
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!ScytInfoText.contains(target) && !boxsText.contains(target) && boxsText.classList.contains('active')) {
        boxsText.classList.remove('active');
        document.body.classList.remove('active');
    }
    if (!ScytInfoText2.contains(target) && !boxsText2.contains(target) && boxsText2.classList.contains('active')) {
        boxsText2.classList.remove('active');
        document.body.classList.remove('active');
    }
    if (!ScytInfoText3.contains(target) && !boxsText3.contains(target) && boxsText3.classList.contains('active')) {
        boxsText3.classList.remove('active');
        document.body.classList.remove('active');
    }
});
const buttons = document.querySelectorAll('.core-button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('checked');
    });
});
const blockPhone = document.getElementById('redactor');
const flexPhone = document.querySelector('.redactor_button');
const redactor = document.querySelector('.redactor_sayt_boxs'); //он виден на сайта
const shopPhone = document.querySelector('.ShopPhone'); // он не видень на сайте
blockPhone.addEventListener('click', () => {
    if (shopPhone.className === 'ShopPhone' && redactor.className === 'redactor_sayt_boxs') {
        redactor.classList.add('active');
        shopPhone.classList.add('active');
    }
    else if (shopPhone.className === 'ShopPhone') {
        shopPhone.classList.add('active');
    }
    else if (shopPhone.className === 'ShopPhone active' && redactor.className === 'redactor_sayt_boxs active') {
        shopPhone.classList.remove('active');
        redactor.classList.remove('active');
    }
    else if (redactor.className === 'ShopPhone active' && shopPhone.className === 'redactor_sayt_boxs') {
        redactor.classList.remove('active');
    }
});
flexPhone.addEventListener('click', () => {
    if (redactor.className === 'redactor_sayt_boxs' && shopPhone.className === 'ShopPhone') {
        redactor.classList.remove('active');
        shopPhone.classList.remove('active');
    }
    else if (redactor.className === 'redactor_sayt_boxs active' && shopPhone.className === 'ShopPhone active') {
        shopPhone.classList.remove('active');
        redactor.classList.remove('active');
    }
});
//Логика поискового строки
const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.boxs-info');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cards.forEach(card => {
        var _a;
        const cardEl = card;
        const title = cardEl.querySelector('h2');
        const text = ((_a = title === null || title === void 0 ? void 0 : title.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
        cardEl.style.display = text.includes(query) ? '' : 'none';
    });
});
// поисковик в Смартфоне 
const searchPhone = document.getElementById('search_Phone');
const boxsSeactPhone = document.querySelectorAll('.seatch');
searchPhone.addEventListener('input', () => {
    const text_input = searchPhone.value.toLowerCase();
    boxsSeactPhone.forEach(card => {
        var _a;
        const cardEl = card;
        const title = cardEl.querySelector('h2');
        const text = ((_a = title === null || title === void 0 ? void 0 : title.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
        cardEl.style.display = text.includes(text_input) ? '' : 'none';
    });
});
const boxsTovar = document.querySelector('.empty-message');
function boxsPust() {
    if (boxsTovar) {
        boxsTovar.textContent = 'Корзинка пустая.';
    }
    else {
        console.error('Ошыбка в корзинке');
    }
}
boxsPust();
const tovarPhoneElement = document.querySelectorAll('.product-card');
const phoneCarzinca = document.querySelectorAll('.phone');
const boxsPhoneCarzinca = document.querySelector('.empty-message');
const carzincaBoxs = [];
phoneCarzinca.forEach(button => {
    button.addEventListener('click', () => {
        const cardEl = button.closest('.boxs-info');
        const cardEl2 = button.closest('#prejniy-sena');
        if (cardEl) {
            const nameElement = cardEl.querySelector('h2');
            const imgElement = cardEl.querySelector('img');
            const priceElement = cardEl.querySelector('span');
            const productName = nameElement ? nameElement.textContent : 'Название не найдено';
            const productImageSrc = imgElement ? imgElement.src : '';
            const productImageAlt = imgElement ? imgElement.alt : 'Изображение товара';
            let productPrice;
            if (priceElement && priceElement.textContent) {
                const priceText = priceElement.textContent.replace(/[^\d.,]/g, '').replace(',', '.');
                productPrice = parseFloat(priceText);
                if (isNaN(productPrice)) {
                    productPrice = 0;
                    console.warn(`Не удалось преобразовать цену "${priceElement.textContent}" в число. Установлено 0.`);
                }
            }
            else {
                productPrice = 0;
            }
            const newPhone = {
                neme: productName,
                price: productPrice,
                imgSrc: productImageSrc,
                imgAlt: productImageAlt,
                count: 0
            };
            carzincaBoxs.push(newPhone);
            if (boxsPhoneCarzinca) {
                boxsPhoneCarzinca.innerHTML = `<h3>Товары в корзине:</h3>`;
                carzincaBoxs.forEach((item, index) => {
                    const itemHtml = `
                        <div class="cart-item">
                            ${item.imgSrc ? `<img src="${item.imgSrc}" alt="${item.imgAlt}" style="max-width: 50px; height: auto; margin-right: 10px;">` : ''}
                            <div>
                                <p style="margin: 0;color:black; font-weight: bold;">${item.neme}</p>
                                <p class="totalPrice" style="margin: 0; color:black; font-size: 0.9em; color: #555;">${item.price} руб.</p> 
                                <p class="numPhone">${item.count}</p>
                                <button class="plussPhone">+</button>
                                <button class="minusPhone">-</button>
                            </div>
                             <button class='delact'>Удалить</button>
                        </div>
                    `;
                    boxsPhoneCarzinca.innerHTML += itemHtml;
                });
            }
            const cart = {};
            let totalprice = 0;
            const pluss = document.querySelectorAll('.plussPhone');
            const minus = document.querySelectorAll('.minusPhone');
            const total = document.querySelectorAll('.totalPrice');
            const cartItmeElement = document.querySelectorAll('.cart-item');
            const numPhoneelement = document.querySelectorAll('.numPhone');
            const Summa = document.querySelector('.Summa');
            pluss.forEach((buttonPlus, index) => {
                buttonPlus.addEventListener('click', () => {
                    var _a, _b, _c;
                    const cartItem = buttonPlus.closest('.cart-item');
                    if (!cartItem)
                        return;
                    const countEl = cartItem.querySelector('.numPhone');
                    const priceEl = cartItem.querySelector('.totalPrice');
                    let price = parseInt((_a = priceEl === null || priceEl === void 0 ? void 0 : priceEl.textContent) !== null && _a !== void 0 ? _a : '0');
                    let count = parseInt((_b = countEl === null || countEl === void 0 ? void 0 : countEl.textContent) !== null && _b !== void 0 ? _b : '0');
                    count++;
                    countEl.textContent = count.toString();
                    totalprice += price;
                    if (Summa)
                        Summa.textContent = totalprice.toString();
                    cart.total = ((_c = cart.total) !== null && _c !== void 0 ? _c : 0) + price;
                });
            });
            minus.forEach((buttonMinus, index) => {
                buttonMinus.addEventListener('click', () => {
                    var _a, _b, _c;
                    const cartItem = buttonMinus.closest('.cart-item');
                    if (!cartItem)
                        return;
                    const countEl = cartItem.querySelector('.numPhone');
                    const priceEl = cartItem.querySelector('.totalPrice');
                    let price = parseInt((_a = priceEl === null || priceEl === void 0 ? void 0 : priceEl.textContent) !== null && _a !== void 0 ? _a : '0');
                    let count = parseInt((_b = countEl === null || countEl === void 0 ? void 0 : countEl.textContent) !== null && _b !== void 0 ? _b : '0');
                    if (count > 1) {
                        count--;
                        countEl.textContent = count.toString();
                        totalprice -= price;
                        if (Summa)
                            Summa.textContent = totalprice.toString();
                        cart.total = ((_c = cart.total) !== null && _c !== void 0 ? _c : 0) - price;
                    }
                });
            });
            const carItems = document.querySelectorAll('.cart-item');
            const summaEl = document.querySelector('.Summa');
            function updateTotalSum() {
                let sum = 0;
                const allItems = document.querySelectorAll('.cart-item');
                allItems.forEach(item => {
                    var _a;
                    const priceEl = item.querySelector('.totalPrice');
                    if (!priceEl)
                        return;
                    const priceText = (_a = priceEl.textContent) !== null && _a !== void 0 ? _a : '0';
                    const priceNumber = parseFloat(priceText.replace(/[^\d.]/g, ''));
                    sum += priceNumber;
                });
                if (summaEl) {
                    summaEl.textContent = `Итого: ${sum.toFixed(2)} руб.`;
                }
            }
            const sena = document.querySelectorAll('#prejniy-sena');
            const deleteButtons = document.querySelectorAll('.delact');
            deleteButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const cartItem = button.closest('.cart-item');
                    const carBoxs = button.closest('.seatch');
                    if (cartItem) {
                        cartItem.remove();
                        updateTotalSum();
                    }
                    else if (carBoxs) {
                        carBoxs.remove();
                        updateTotalSum();
                    }
                });
            });
            updateTotalSum();
        }
        else {
            console.warn("Кнопка .phone не найдена внутри элемента с классом .boxs-info. Проверьте HTML-структуру.");
        }
    });
});
const Summ = document.querySelector('.Summa');
let SummaPhone = Summ ? Summ.textContent = 'Корзина пока что пуста 0.00' : 'Сумма не написано';
