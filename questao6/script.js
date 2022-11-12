const img = document.getElementById('img');
const btn = document.getElementById('btn');
///////////////////////////////////////////////////

btn.addEventListener('click', () => {
    img.setAttribute('src', 'https://images.passeidireto.com/user_picture/18917094/picture/7d8c4ad8-ad3b-4809-a681-22990f6f7b45/picture.large');
    console.log('Imagem trocada');
})