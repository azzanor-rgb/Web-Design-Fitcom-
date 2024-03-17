const password = document.getElementById('password'); 
const showHide = document.getElementById('showHide');

password.type = 'password'; 
showHide.innerHTML = '<i class="bi bi-eye"></i>'; 
showHide.style.cursor = 'pointer'; 

showHide.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
        showHide.innerHTML = '<i class="bi bi-eye-slash"></i>'; 
    } else {
        showHide.innerHTML = '<i class="bi bi-eye"></i>'; 
        password.type = 'password'; 
    }
});