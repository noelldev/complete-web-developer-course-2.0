let date = new Date();
let year = date.getFullYear();
let numDate = date.getDate();
let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
let today = days[date.getDay()];
let months = [ 'January', 'February', 'March', 'April' ];
let month = months[date.getMonth()];

document.getElementById('date').innerHTML = `${today}, ${numDate} ${month}`;
