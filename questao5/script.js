const title = document.getElementById('title');
const btn1 = document.getElementById('change-text');
const btn2 = document.getElementById('change-color');
/////////////////////////////////////////////////////////

btn1.addEventListener('click', () => {
    title.innerHTML = "DevWeb Unifavip 2022!";
})

btn2.addEventListener('click', () => {
    title.style.color = "green";
})