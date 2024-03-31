const datetimeStartPicker = document.getElementById('datetimestart');
const datetimeEndPicker = document.getElementById('datetimeend');

// datetimeStartPicker.addEventListener('change', calculateTimeDifference);
// datetimeEndPicker.addEventListener('change', calculateTimeDifference);

hoursDifference = 0;

function calculateTimeDifference() {
  const selectedStartDateTime = new Date(datetimeStartPicker.value);
  const selectedEndDateTime = new Date(datetimeEndPicker.value);

  const timeDifference = selectedEndDateTime.getTime() - selectedStartDateTime.getTime();
  hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));

  // console.log(`Number of hours selected: ${hoursDifference}`);
}


const unavailableTimes = ['2022-10-01T09:00', '2023-10-01T10:30', '2024-10-01T14:15'];

function unavailable() {
  const selectedDateTime = new Date(datetimeStartPicker.value);
  console.log(selectedDateTime);
  const isUnavailable = unavailableTimes.some(time => {
    const unavailableDateTime = new Date(time);
    return selectedDateTime.getTime() === unavailableDateTime.getTime();
  });

  if (isUnavailable) {
    datetimeStartPicker.style.backgroundColor = 'red';
  } else {
    datetimeStartPicker.style.backgroundColor = '';
  }
}

function display() {
  // const hours = document.getElementById('customRange3').value * 2;
  const rate = 20000;
  
  document.getElementById('output1').innerText = `Output hours: ${hoursDifference}`;
  document.getElementById('output2').innerText = `Output rate: ${hoursDifference * rate}`;
}
