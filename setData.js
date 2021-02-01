'use strict';

// selector----------------------------------------
const friends_container = document.querySelector('.friends_container div');
const friends_list = document.querySelector('.friends_list');
const number = friends_container.querySelector('.number');



// function----------------------------------------
//친구목록이 들어있는 json파일을 불러온다.
function loadData() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.friend);
};

loadData()
    .then(item => {
        item.forEach(element => {
            addFriends(element);
            const count = friends_list.childElementCount;
            number.innerText = `${count}`;
        })
    });


//등록된 친구수를 나타내는 함수
function countNumber() {
    const arr = friends_list.children;
    let count2 = friends_list.childElementCount;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.style.display == 'flex') {
            count += 1;
            console.log(count);
            number.innerText = `${count}`;

        } else {
            count2 -= 1;
            number.innerText = `${count2}`;
        }
    }

};




//친구 목록에 친구추가
function addFriends(item) {
    const li = document.createElement('li');
    li.classList = `${item.name}`;
    const button = document.createElement('button');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');
    img.setAttribute('src', `${item.img}`);
    p.innerText = `${item.name}`;
    p2.innerText = `${item.message}`;
    friends_list.appendChild(li);
    li.appendChild(button);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(p2);
    button.appendChild(img);
    p.classList = 'friend_name';
    p2.classList = 'message';
};





