const selectMonth = document.querySelector('#month');
const selectionHeader = document.querySelector('h1');
const ulDays = document.querySelector('ul');
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.toLocaleString('en', { month: 'long' });
const selectedMonth = currentMonth;
let days;

selectMonth.value = currentMonth;
selectionHeader.innerHTML = currentMonth;
if (selectedMonth === 'February') {
    createCalendar('28', selectedMonth)
}
else if (selectedMonth === 'April' || selectedMonth === 'June' || selectedMonth === 'September' || selectedMonth === 'November') {
    createCalendar('30', selectedMonth)
} else {
    createCalendar('31', selectedMonth)
}


selectMonth.addEventListener('change', () => {
    const selectedMonth = selectMonth.value;
    let days = 31;
    if (selectedMonth === 'February') {
        days = 28;
    }
    else if (selectedMonth === 'April' || selectedMonth === 'June' || selectedMonth === 'September' || selectedMonth === 'November') {
        days = 30;
    }
    createCalendar(days, selectedMonth);
    if (currentMonth === selectedMonth) {
        const elements = Array.from(document.getElementsByTagName('li'));
        const result = elements.filter(a => a.innerHTML == currentDay);
        result[0].style.cssText = 'background-color: #5d323b; border: 1px solid white;';
        }
});

function createCalendar(days, selectedMonth) {
    selectionHeader.textContent = selectedMonth;
    ulDays.innerHTML = '';
    for (let i = 1; i <= days; i++) {
        const createDays = document.createElement('li');
        createDays.textContent = i;
        ulDays.appendChild(createDays);
    }
}

if (currentMonth === selectedMonth) {
    const elements = Array.from(document.getElementsByTagName('li'));
    const result = elements.filter(a => a.innerHTML == currentDay);
    result[0].style.cssText = 'background-color: #5d323b; border: 1px solid white;';
    }

function resetCalendar() {
    selectMonth.value = currentMonth;
    selectionHeader.innerHTML = currentMonth;
    if (selectedMonth === 'February') {
        days = 28;
    }
    else if (selectedMonth === 'April' || selectedMonth === 'June' || selectedMonth === 'September' || selectedMonth === 'November') {
        days = 30;
    }
    createCalendar(days, selectedMonth);
    if (currentMonth === selectedMonth) {
        const elements = Array.from(document.getElementsByTagName('li'));
        const result = elements.filter(a => a.innerHTML == currentDay);
        result[0].style.cssText = 'background-color: #5d323b; border: 1px solid white;';
        }
}