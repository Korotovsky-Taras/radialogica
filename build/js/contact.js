import"../chunks/sidebar.js";function e(){if(window.L===null||window.L===void 0)return;const t=L.map("map",{dragging:!L.Browser.mobile,tap:!L.Browser.mobile}).setView([38.6355,-90.22385],18.03);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18.03,attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'}).addTo(t),L.marker([38.6355,-90.22385]).addTo(t)}document.addEventListener("DOMContentLoaded",e);
