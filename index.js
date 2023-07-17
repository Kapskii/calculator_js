const val1 = document.querySelector('.input1')
const val2 = document.querySelector('.input2')

const result = document.querySelector('.result')

const summ = document.querySelector('.summ')
summ.addEventListener('click', function () {
    result.innerHTML = +val1.value + +val2.value
})
const subt = document.querySelector('.subt')
subt.addEventListener('click', function () {
    result.innerHTML = +val1.value - +val2.value
})
const multi = document.querySelector('.multi')
multi.addEventListener('click', function () {
    result.innerHTML = +val1.value * +val2.value
})
const divis = document.querySelector('.divis')
divis.addEventListener('click', function () {
    if (+val2.value !== 0) {
        result.innerHTML = +val1.value / +val2.value
    } else {
        result.innerHTML = 'НА НОЛЬ ДЕЛИТЬ НЕЛЬЗЯ!'
    }
})