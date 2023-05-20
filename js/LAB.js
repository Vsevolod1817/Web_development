function toggleSection(classname) {
    const section = document.getElementsByClassName(classname)[0];
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function setDate() {
    const dateElement = document.getElementById("data_label");

    const today = new Date();
    const day = today.getDate().toLocaleString("ru-RU").padStart(2, "0");
    const month = (today.getMonth() + 1).toLocaleString("ru-RU")
    const year = today.getFullYear().toLocaleString("ru-RU").replace(/\s/g, "");

    const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const weekday = weekdays[today.getDay()];
    const hour = today.getHours().toString().padStart(2, "0");
    const minute = today.getMinutes().toString().padStart(2, "0");
    const second = today.getSeconds().toString().padStart(2, "0");
    dateElement.innerHTML = day + " " + months[month-1] + " " + year + ", " + weekday + ", " + hour + "-" + minute + "-" + second;
}

function setCalendar() {
    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();
// storing full name of all months in array
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
        "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";
        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }
        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
    }
    renderCalendar();
    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
        });
    });
}

function countChildElements(node) {
    var childElements = [];
  
    if (node.nodeType === Node.ELEMENT_NODE) {
      var children = node.children;
      for (var i = 0; i < children.length; i++) {
        childElements.push(children[i]);
        var grandchildren = countChildElements(children[i]);
        childElements = childElements.concat(grandchildren);
      }
    }
  
    return childElements.length;
  }

function task3(elementId) {
    var root = document.documentElement; // корневой элемент DOM-дерева
    const whitespaceCount = countChildElements(root);
    const element = document.getElementById(elementId);
    element.innerText = `Кол-во: ${whitespaceCount}`;
}

function task4(elementId) {
    document.getElementById(elementId).addEventListener('click', function () {
        if (!this.classList.contains('rotate')) {
            setTimeout(() => {
                this.classList.add('rotate');
                this.addEventListener('animationend', function () {
                    this.classList.remove('rotate');
                    this.classList.add('reverse-rotate');
                    this.addEventListener('animationend', function () {
                        this.classList.remove('reverse-rotate');
                    });
                });
            }, 50);
        }
    });
}

function task5(targetId) {
    const list = document.getElementById(targetId);
    const input = prompt("Введите значение:");

    if (input !== null) {
    const listItem = document.createElement("li");
    listItem.textContent = input;

    // Добавляем новый элемент в начало списка
    list.insertBefore(listItem, list.firstChild);

    listItem.addEventListener("click", () => {
        const prevItem = listItem.previousElementSibling;
        if (prevItem !== null) {
        list.removeChild(prevItem);
        }
    });
}
}

function task6(tableId) {
    // reset table
    const table = document.getElementById(tableId);
    table.innerHTML = "";
    // generate 10x10 empty table
    for (let i = 0; i < 10; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement("td");
            cell.addEventListener("dblclick", generateRandomNumber);
            row.appendChild(cell);
        }
        document.getElementById(tableId).appendChild(row);
    }
    // function to generate random number and put it in cell
    function generateRandomNumber() {
        this.innerHTML = Math.floor(Math.random() * 100) + 1;
    }
}

function task7() {
    let menuItems = document.querySelectorAll("#menu li");
    let itemsLeft = menuItems.length;
    const menu = document.getElementById("menu");
    const lastMessage = document.querySelector("#menu + p");
    if (lastMessage) {
        menu.parentNode.removeChild(lastMessage);
    }

    if (itemsLeft < 5) {
        const numToAdd = 5 - itemsLeft;
        for (let i = 0; i < numToAdd; i++) {
            const newItem = document.createElement("li");
            newItem.textContent = "Пирожное";
            menu.appendChild(newItem);
        }
    }
    const message = document.createElement("p");
    menuItems = document.querySelectorAll("#menu li");
    itemsLeft = menuItems.length;
    message.textContent = "Сладости кончились";
    message.style.display = "none";
    menu.parentNode.appendChild(message);

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("click", () => {
            menuItem.classList.add("fade-out");
            setTimeout(() => {
                menu.removeChild(menuItem);
                itemsLeft--;
                if (itemsLeft === 0) {
                    message.style.display = "block";
                } else {
                    message.style.display = "none";
                }
            }, 1000); // 1000 ms matches the fade-out animation duration
        });
    });
}

function task8() {
    const image = document.getElementById("smooth-image");
    image.style.opacity = 1;
    let fadeTimeout;

    function fadeIn() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity < 1) {
            opacity += 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeIn, 30);
        }
    }

    function fadeOut() {
        clearTimeout(fadeTimeout);
        let opacity = parseFloat(image.style.opacity);
        if (opacity > 0.5) {
            opacity -= 0.1;
            image.style.opacity = opacity;
            fadeTimeout = setTimeout(fadeOut, 30);
        }
    }

    image.addEventListener("mouseover", fadeOut);
    image.addEventListener("mouseout", fadeIn);
}

const form = document.querySelector('#registration-form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
    if (!emailRegex.test(emailInput.value)) {
        event.preventDefault();
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

function validateEmail() {
    var email = document.getElementById("email");
    var emailPattern = /^\w{2,}@\w{2,}\.\w{2,4}$/;

    if (!emailPattern.test(email.value)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address (example@ex.com)";
        email.classList.add("error");
    } else {
        document.getElementById("emailError").innerHTML = "";
        email.classList.remove("error");
    }

    const submitBtn = document.getElementById("task10-submit-button");
    submitBtn.disabled = validateSubmit()
}


function validatePasswords() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirm-password");

    if (password.value !== confirmPassword.value) {
        document.getElementById("passwordError").innerHTML = "Passwords do not match";
        password.classList.add("error");
        confirmPassword.classList.add("error");
    } else {
        document.getElementById("passwordError").innerHTML = "";
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
    }

    const submitBtn = document.getElementById("task10-submit-button");
    submitBtn.disabled = validateSubmit()
}

function validatePhone() {
    var phone = document.getElementById("phone");
    var phonePattern = /^\+[0-9]{11}$/;

    if (!phonePattern.test(phone.value)) {
        document.getElementById("phoneError").innerHTML = "Enter a valid phone number (+71234567890)";
        phone.classList.add("error");
    } else {
        document.getElementById("phoneError").innerHTML = "";
        phone.classList.remove("error");
    }

    const submitBtn = document.getElementById("task10-submit-button");
    submitBtn.disabled = validateSubmit()
}

function validateDate() {
    var date = document.getElementById("date");
    var datePattern = /^\d{2}[.]\d{2}[.]\d{4}$/;

    if (!datePattern.test(date.value)) {
        document.getElementById("dateError").innerHTML = "Enter a valid date (dd.mm.yyyy)";
        date.classList.add("error");
    } else {
        document.getElementById("dateError").innerHTML = "";
        date.classList.remove("error");
    }

    const submitBtn = document.getElementById("task10-submit-button");
    submitBtn.disabled = validateSubmit()
}

function validateSubmit() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const phone = document.getElementById("phone");
    const date = document.getElementById("date");
    const email = document.getElementById("email");

    const name = document.getElementById("full-name");
    const faculty = document.getElementById("faculty");
    const department = document.getElementById("department");

    const phonePattern = /^\+[0-9]{11}$/;
    const datePattern = /^\d{2}[.]\d{2}[.]\d{4}$/;
    const emailPattern = /^\w{2,}@\w{2,}\.\w{2,4}$/;

    const passwordCond = password.value === confirmPassword.value
    const phoneCond = phonePattern.test(phone.value)
    const dataCond = datePattern.test(date.value)
    const emailCond = emailPattern.test(email.value)

    // const nameCond = !isBlank(name.textContent)
    // const facultyCond = !isBlank(faculty.textContent)
    // const departmentCond = !isBlank(department.textContent)

        // && nameCond && facultyCond && departmentCond
    return !(passwordCond && phoneCond && dataCond && emailCond)
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
