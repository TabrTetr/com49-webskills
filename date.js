const d = new Date();
year = d.getFullYear();
month = d.getMonth();
date = d.getDate();
day = d.getDay();

document.getElementById("date").innerText = date + ". " + month + ". " + year;
