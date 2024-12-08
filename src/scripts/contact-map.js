
function init() {
    if (window.L === null || window.L === undefined) {
        return;
    }

    const map = L.map('map', {
        dragging: !L.Browser.mobile,
        tap: !L.Browser.mobile
    }).setView([38.6355,-90.22385], 18.03);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18.03,
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    L.marker([38.6355,-90.22385]).addTo(map);
}

document.addEventListener("DOMContentLoaded", init);
