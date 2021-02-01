'use strict';

const aside = document.querySelector('.aside');
const search = document.querySelector('.search_toggle');
const birth = document.querySelector('.main li:nth-child(2) div:last-child');
const header_form = document.querySelector('.content_header div:last-child form')
const searchInput = document.querySelector('form input');
const setting = document.querySelector('#setting');
const nav_bar = document.querySelector('.nav_bar');
const modal_container = document.querySelector('.modal_container');
const addBtn = document.querySelector('.fas.fa-user-plus');
const modal = document.querySelector('.modal');
// addEventListener

//header toggle 
document.addEventListener('click', (event) => {
    const i = event.target;
    if ((i.className == 'fas fa-search') || (i.className == 'search_Delete')) {
        showSearch();
    }
});

header_form.addEventListener('keyup', (event) => {

    const value = event.target.value.toUpperCase();
    const arr = friends_list.children;
    for (let i = 0; i < arr.length; i++) {
        const li = arr[i];
        const name = arr[i].querySelector('div .friend_name').innerText.toUpperCase();
        if (name.indexOf(`${value}`) > -1) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    }
    countNumber();
});


header_form.addEventListener('submit', (event) => {
    event.preventDefault();
});

header_form.addEventListener('click', (event) => {
    header_form.style.backgroundColor = 'white';
});

addBtn.addEventListener('click', (event) => {
    const i = event.target;
    if (i.className = 'fas fa-user-plus') {
        modal_container.classList.toggle('appear');
    }
})

//친구목록 토글 이벤트
document.addEventListener('click', (event) => {
    const i = event.target;
    const content = i.parentNode.nextElementSibling;
    if (i.className == 'fas fa-angle-up') {
        i.classList.remove('fa-angle-up');
        i.classList.add('fa-angle-down');
        content.style.display = 'none';

    } else if (i.className == 'fas fa-angle-down') {
        i.classList.remove('fa-angle-down');
        i.classList.add('fa-angle-up');
        content.style.display = 'flex';
    }
});


nav_bar.addEventListener('click', (event) => {
    const i = event.target;
    if (i.className == 'fas fa-cog') {
        setting.classList.toggle('setToggle');
        return;
    } else if (i.className == 'far fa-smile-beam') {
        window.open('emoticon.html', '_blank', 'width=500px, height=500px');
    } else if (i.className == 'far fa-bell') {
        i.classList.remove('fa-bell');
        i.classList.add('fa-bell-slash');
    } else if (i.className == 'far fa-bell-slash') {
        i.classList.remove('fa-bell-slash');
        i.classList.add('fa-bell');
    } else {
        return;
    }
});

//모달창 닫기 이벤트 핸들러 함수  
modal.addEventListener('click', (event) => {
    const i = event.target;
    if (i.className == 'fas fa-times') {
        modal_container.classList.toggle('appear');
    }
});





// function
function showSearch() {
    if (search.className == 'search_toggle') {
        search.classList.remove('search_toggle');
        search.classList.add('hidden');
    } else {
        search.classList.add('search_toggle');
        search.classList.remove('hidden');
    }
}





