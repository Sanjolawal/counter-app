let view = document.querySelector('p')

let incrbtn = document.querySelector('.incr')

let resetbtn = document.querySelector('.reset')

let dcrbtn =  document.querySelector('.dcr')

let count = 0
function increase() {
    
    count = count + 1
    view.innerHTML = count
    if ( count < 0) {
        view.style.color = 'red'
    }else if (count === 0) {
        view.style.color = 'black'
    }
    else {
        view.style.color = 'green'
    }

}
incrbtn.addEventListener('click', increase)

function decrease() {
    
    count = count - 1
    view.innerHTML = count
    if ( count < 0) {
        view.style.color = 'red'
    }else if (count === 0) {
        view.style.color = 'black'
    }
    console.log(count)
}
dcrbtn.addEventListener('click', decrease)

function reset() {
    
    count = 0
    view.innerHTML = count
    view.style.color = 'black'
    console.log(count)
}
resetbtn.addEventListener('click', reset)

