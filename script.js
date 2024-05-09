// const wrapper = document.querySelector('wrapper')
// const registerlink = document.querySelector('register-link')
// const loginlink = document.querySelector('login-link')

// registerlink.oneclick = () => {
//     wrapper.classList.add('active')
// }

// loginlink.oneclick = () => {
//     wrapper.classList.remove('active')
// }


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
 });