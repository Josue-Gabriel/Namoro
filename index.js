const naoButton = document.getElementById('nao');
const simButton = document.getElementById('sim');
const container = document.getElementsByClassName('container');
const mensagem = document.getElementById('mensagem');
const imagem = document.getElementById('imagem');

naoButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - naoButton.offsetHeight);
    naoButton.style.position = 'absolute';
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
});

naoButton.addEventListener('click', () => {
    const randomX = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - naoButton.offsetHeight);
    naoButton.style.position = 'absolute';
    naoButton.style.left = randomX + 'px';
    naoButton.style.top = randomY + 'px';
});

simButton.addEventListener('click', function(){
    naoButton.style.display = 'none';
    simButton.style.display = 'none';
    mensagem.style.display = 'none';
    imagem.style.display = 'block';
});