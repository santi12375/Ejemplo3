var mymap = L.map('main_map').setView([6.2380,-75.5760], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap); 
            
var marker = L.marker([6.2380,-75.5760]).addTo(mymap);