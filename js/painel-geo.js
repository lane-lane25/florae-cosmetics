// Controle do Modal com os Conceitos Acadêmicos de Geografia
const openGeoBtn = document.getElementById('openGeoModal');
const closeGeoBtn = document.getElementById('closeGeoModal');
const geoModal = document.getElementById('geoModal');

openGeoBtn.addEventListener('click', () => {
    geoModal.classList.add('active');
});

closeGeoBtn.addEventListener('click', () => {
    geoModal.classList.remove('active');
});

// Fechar modal ao clicar fora da caixa principal
window.addEventListener('click', (event) => {
    if (event.target === geoModal) {
        geoModal.classList.remove('active');
    }
});