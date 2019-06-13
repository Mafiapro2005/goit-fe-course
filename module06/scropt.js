const wrapper = document.querySelector('.wrapper');

// create 
const header = document.createElement('header');
const logoConteiner = document.createElement('div');
const nav = document.createElement('nav');

//add class
header.classList.add('header');
logoConteiner.classList.add('logo');

//add text
logoConteiner. textContent = 'Mogo';

//append
wrapper.prepend(header);
header.append(logoConteiner);
header.append(nav);

console.log(wrapper);
