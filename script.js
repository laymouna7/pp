// script.js

function submitChoice() {
    var songName = document.getElementById('songName').value;
    var artistName = document.getElementById('artistName').value;
    var today = new Date();
    var dayOfWeek = today.getDay(); 
    var calendar = document.getElementById('calendar');
    if (calendar.children.length === 0) {
        generateCalendar(calendar);
    }
    var cells = calendar.querySelectorAll('.day');
    var cell = cells[dayOfWeek];

    var entry = document.createElement('div');
    entry.classList.add('entry');
    entry.textContent = `${songName} - ${artistName}`;

    cell.appendChild(entry);
}
function generateCalendar(calendar) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for (var i = 0; i < days.length; i++) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = days[i];
        calendar.appendChild(dayElement);
    }
}
