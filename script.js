const selectMonth = document.querySelector('#month');
const selectionHeader = document.querySelector('h1');
const ulDays = document.querySelector('ul');

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

createCalendar(31, 'January')
// APRIL, JUNE, SEPT, NOV = 30