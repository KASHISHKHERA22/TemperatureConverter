let btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    calTemp();
})

const calTemp = () => {
    let numberTemp = document.querySelector('#input');
    let temp_diff = document.querySelector('#temp_diff');
    let final_answer = document.querySelector('.answer');
    let value_temp = temp_diff.options[temp_diff.selectedIndex]
    let result;
    const celtofah = (Celsius) => {
        let feh = Math.round((Celsius * 9 / 5) + 32);
        return feh;
    }
    const fahtocel = (Fahrenheit) => {
        let cel = Math.round((Fahrenheit - 32) * 5 / 9);
        return cel;
    }


    if (value_temp.value == 'Celsius') {
        result = celtofah(numberTemp.value);
        final_answer.innerHTML = `The Temperature in Fahrenheit = ${result} °F`;
    }
    else {
        result = fahtocel(numberTemp.value);
        final_answer.innerHTML = `The Temperature in Celcius = ${result} °C`;
    }
}

