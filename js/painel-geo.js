const openGeoModal = document.getElementById('openGeoModal');
const closeGeoModal = document.getElementById('closeGeoModal');
const geoModal = document.getElementById('geoModal');

openGeoModal.addEventListener('click', () => {
    geoModal.classList.add('active');
});

closeGeoModal.addEventListener('click', () => {
    geoModal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === geoModal) {
        geoModal.classList.remove('active');
    }
});