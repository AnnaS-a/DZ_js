import {postcode} from "./data.js";

const data = JSON.parse(postcode);
console.log(data);
data.forEach(console.log);

// fetch('https://randomuser.me/api/?results=3')
//       .then(response => response.json())
//       .then(json => console.log(json))


const title = document.createElement('div');
document.body.appendChild(title);
const titleDesc = document.createElement('h1');
titleDesc.textContent = 'СЛУЧАЙНЫЕ ЛЮДИ...';
title.appendChild(titleDesc);
titleDesc.style.display = 'flex';
titleDesc.style.justifyContent = 'center';
titleDesc.style.alignItems = 'center';

const divContent = document.createElement("div");
document.body.appendChild(divContent);
divContent.style.display = 'flex';
divContent.style.justifyContent = 'center';
divContent.style.flexWrap = 'wrap';
divContent.style.gap = '20px';

data.forEach(({name, dob, email, phone, picture}) => {
    const cartBox = document.createElement('div');
    cartBox.classList.add('cart');
    cartBox.style.marginRight = '10px';
    cartBox.style.display = 'inline-block';
    cartBox.style.flexDirection = 'row';
    cartBox.style.border = '1px solid blue';
    cartBox.style.padding = '10px';
    cartBox.style.boxShadow = '14px 23px 20px rgba(0, 0, 0, 0.15)';
    cartBox.style.gap = '10px';

    const cartImg = document.createElement('img');
    cartBox.appendChild(cartImg);
    cartImg.src = picture.large;
    cartImg.width = 270;
    cartImg.height = 350;
    const cartInfo = document.createElement('div');
    cartBox.appendChild(cartInfo);

    const cartInfoName = document.createElement('h3');
    const cartInfoEmail = document.createElement('p');
    const cartInfoPhone = document.createElement('p');
    cartInfo.appendChild(cartInfoName);
    cartInfo.appendChild(cartInfoEmail);
    cartInfo.appendChild(cartInfoPhone);

    cartInfoName.textContent = `${name.first} ${name.last}, age:${dob.age}`;
    cartInfoEmail.textContent = email;
    cartInfoPhone.textContent = `phone: ${phone}`;
    cartInfoName.style.margin ='10px 0px 10px';
    
    divContent.appendChild(cartBox);
});
