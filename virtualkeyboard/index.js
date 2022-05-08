//document.body.innerHTML = "<h1>Hello</h1>";
//let keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

//let keyboard = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'Space'];
//let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 13, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47]
// document.onkeypress = function (event) {
//     //console.log(event)
//     keyboard.push(event.keyCode);
//     console.log(keyboard)
// }
// function init() {
//     let out = '';
//     for (let i = 0; i < keyboard.length; i++) {
//         if (i == 13 || i == 26 || i == 39) {
//             out += '<div class="clear-fix"></div>'
//         }
//         out += '<div class="k-key">' + String.fromCharCode(keyboard[i]) + '</div>'
//     }
//     document.querySelector('#keyboard').innerHTML = out;
// }
// init();
const title = document.createElement('h1')
title.className = 'title'
title.textContent = 'VIRTUAL KEYBOARD'
document.body.appendChild(title)


const container = document.createElement('div')
container.className = 'container'
document.body.appendChild(container)

const subtitle = document.createElement('h2')
subtitle.className = 'subtitle'
subtitle.textContent = 'Не сделал переключение языков, клавиатура сделана на windows'
document.body.appendChild(subtitle)


const text = document.createElement('textarea')
text.className = 'textarea'
container.appendChild(text).focus();

const keyboard__wrapper = document.createElement('div')
keyboard__wrapper.className = 'keyboard__wrapper'
//document.body.append(keyboard__wrapper)
container.appendChild(keyboard__wrapper)

const keyboard__keys = document.createElement('div')
keyboard__keys.className = 'keyboard__keys'
//document.body.append(keyboard__keys)
keyboard__wrapper.appendChild(keyboard__keys)

const row1 = document.createElement('div')
row1.className = 'row'
//document.body.append(row)
keyboard__keys.append(row1)

const row2 = document.createElement('div')
row2.className = 'row'
//document.body.append(row)
keyboard__keys.append(row2)

const row3 = document.createElement('div')
row3.className = 'row'
//document.body.append(row)
keyboard__keys.append(row3)

const row4 = document.createElement('div')
row4.className = 'row'
//document.body.append(row)
keyboard__keys.append(row4)

const row5 = document.createElement('div')
row5.className = 'row'
//document.body.append(row)
keyboard__keys.append(row5)

function buttonMaker(key, className, appendPlace) {
    const buttonName = document.createElement('div')
    buttonName.className = className;
    buttonName.innerText = key
    appendPlace.append(buttonName)
    console.log(buttonName)
}
buttonMaker('`', 'keys', row1)
buttonMaker('1', 'keys', row1)
buttonMaker('2', 'keys', row1)
buttonMaker('3', 'keys', row1)
buttonMaker('4', 'keys', row1)
buttonMaker('5', 'keys', row1)
buttonMaker('6', 'keys', row1)
buttonMaker('7', 'keys', row1)
buttonMaker('8', 'keys', row1)
buttonMaker('9', 'keys', row1)
buttonMaker('0', 'keys', row1)
buttonMaker('-', 'keys', row1)
buttonMaker('=', 'keys', row1)
buttonMaker('Backspace', 'keys backspace', row1)

buttonMaker('Tab', 'keys tab', row2)
buttonMaker('Q', 'keys', row2)
buttonMaker('W', 'keys', row2)
buttonMaker('E', 'keys', row2)
buttonMaker('R', 'keys', row2)
buttonMaker('T', 'keys', row2)
buttonMaker('Y', 'keys', row2)
buttonMaker('U', 'keys', row2)
buttonMaker('I', 'keys', row2)
buttonMaker('O', 'keys', row2)
buttonMaker('P', 'keys', row2)
buttonMaker('[', 'keys', row2)
buttonMaker(']', 'keys', row2)
buttonMaker('\\', 'keys', row2)
buttonMaker('Del', 'keys del', row2)

buttonMaker('Caps', 'keys caps', row3)
buttonMaker('A', 'keys', row3)
buttonMaker('S', 'keys', row3)
buttonMaker('D', 'keys', row3)
buttonMaker('F', 'keys', row3)
buttonMaker('G', 'keys', row3)
buttonMaker('H', 'keys', row3)
buttonMaker('J', 'keys', row3)
buttonMaker('K', 'keys', row3)
buttonMaker('L', 'keys', row3)
buttonMaker(';', 'keys', row3)
buttonMaker('\'\ ', 'keys', row3)
buttonMaker('Enter', 'keys enter', row3)

buttonMaker('Shift', 'keys lshift', row4)
buttonMaker('Z', 'keys', row4)
buttonMaker('X', 'keys', row4)
buttonMaker('C', 'keys', row4)
buttonMaker('V', 'keys', row4)
buttonMaker('B', 'keys', row4)
buttonMaker('N', 'keys', row4)
buttonMaker('M', 'keys', row4)
buttonMaker(',', 'keys', row4)
buttonMaker('.', 'keys', row4)
buttonMaker('/', 'keys', row4)
buttonMaker('ᐃ', 'keys uarrow', row4)
buttonMaker('Shift', 'keys rshift', row4)


buttonMaker('Ctrl', 'keys lctrl', row5)
buttonMaker('Win', 'keys lwin', row5)
buttonMaker('Alt', 'keys lalt', row5)
buttonMaker('Space', 'keys space', row5)
buttonMaker('Alt', 'keys ralt', row5)
buttonMaker('Ctrl', 'keys rctrl', row5)
buttonMaker('ᐊ', 'keys larrow', row5)
buttonMaker('ᐁ', 'keys darrow', row5)
buttonMaker('ᐅ', 'keys rarrow', row5)
buttonMaker('    ', 'keys rwin', row5)


let keys = document.querySelectorAll('.keys');
let space = document.querySelector('.space');
let lshift = document.querySelector('.lshift');
let rshift = document.querySelector('.rshift');
let caps = document.querySelector('.caps');
let tab = document.querySelector('.tab');
let del = document.querySelector('.del');
let enter = document.querySelector('.enter');
let ralt = document.querySelector('.ralt');
let lalt = document.querySelector('.lalt');
let rwin = document.querySelector('.rwin');
let lwin = document.querySelector('.lwin');
let lctrl = document.querySelector('.lctrl');
let rctrl = document.querySelector('.rctrl');
let larrow = document.querySelector('.larrow');
let uarrow = document.querySelector('.uarrow');
let rarrow = document.querySelector('.rarrow');
let darrow = document.querySelector('.darrow');
let backspace = document.querySelector('.backspace');

let body = document.querySelector('body');
//let keyboard__wrapper = document.querySelector('.keyboard__wrapper');
let textarea = document.querySelector('.text');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText)
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || (e.key == keys[i].getAttribute('lowerCaseName'))) {
            keys[i].classList.add('active')
        }
        if (e.code == 'Space') {
            space.classList.add('active')
        }
        if (e.code == 'ShiftLeft') {
            rshift.classList.remove('active')
        }
        if (e.code == 'ShiftRight') {
            lshift.classList.remove('active')
        }
        if (e.code == 'AltLeft') {
            ralt.classList.remove('active')
        }
        if (e.code == 'AltRight') {
            lalt.classList.remove('active')
        }
        if (e.code == 'ControlLeft') {
            lctrl.classList.add('active')
        }
        if (e.code == 'ControlRight') {
            rctrl.classList.add('active')
        }
        if (e.code == 'AltRight') {
            lalt.classList.remove('active')
        }
        if (e.code == 'CapsLock') {
            caps.classList.toggle('active')
        }
        if (e.code == 'Delete') {
            del.classList.add('active')
        }
        if (e.code == 'ArrowLeft') {
            larrow.classList.add('active')
        }
        if (e.code == 'ArrowRight') {
            rarrow.classList.add('active')
        }
        if (e.code == 'ArrowUp') {
            uarrow.classList.add('active')
        }
        if (e.code == 'ArrowDown') {
            darrow.classList.add('active')
        }
        if (e.code == 'WindowsLeft') {
            lwin.classList.add('active')
        }
        // if (e.code == 'Tab') {
        //     space.classList.add('active')
        // }
    }
})

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || (e.key == keys[i].getAttribute('lowerCaseName'))) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if (e.code == 'Space') {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        // if (e.code == 'Tab') {
        //     keys[i].classList.remove('active')
        //     keys[i].classList.add('remove')
        // }
        // if (e.code == 'ShiftLeft') {
        //     keys[i].classList.remove('active')
        //     keys[i].classList.add('remove')
        // }
        // if (e.code == 'ShiftRight') {
        //     keys[i].classList.remove('active')
        //     keys[i].classList.add('remove')
        // }

        if (e.code == 'ControlLeft') {
            lctrl.classList.remove('active')
            lctrl.classList.add('remove')
        }
        if (e.code == 'ControlRight') {
            rctrl.classList.remove('active')
            rctrl.classList.add('remove')
        }

        if (e.code == 'ShiftLeft') {
            rshift.classList.remove('active')
            rshift.classList.remove('remove')
        }
        if (e.code == 'ShiftRight') {
            lshift.classList.remove('active')
            lshift.classList.remove('remove')
        }

        if (e.code == 'AltLeft') {
            ralt.classList.remove('active')
            ralt.classList.remove('remove')
        }
        if (e.code == 'AltRight') {
            ralt.classList.remove('active')
            ralt.classList.remove('remove')
        }

        if (e.code == 'ArrowLeft') {
            larrow.classList.remove('active')
            larrow.classList.add('remove')
        }
        if (e.code == 'ArrowRight') {
            rarrow.classList.remove('active')
            rarrow.classList.add('remove')
        }
        if (e.code == 'ArrowUp') {
            uarrow.classList.remove('active')
            uarrow.classList.add('remove')
        }
        if (e.code == 'ArrowDown') {
            darrow.classList.remove('active')
            darrow.classList.add('remove')
        }
        if (e.code == 'Delete') {
            del.classList.remove('active')
            del.classList.add('remove')
        }

        setTimeout(() => {
            keys[i].classList.remove('remove')
        })
    }
})


// window.addEventListener('click', function (e) {
//     if (e.key == keys[i].getAttribute('keyname') || (e.key == keys[i].getAttribute('lowerCaseName'))) {
//         keys[i].classList.add('active')
//     }
// })

document.querySelectorAll('.keyboard__keys .keys').forEach(function (el) {
    el.onclick = function (event) {
        document.querySelectorAll('.keyboard__keys .keys').forEach(function (el) {
            el.classList.remove('active');
        });
        this.classList.add('active')
        //textarea += this.el
        document.getElementByClassName('textarea').value += $(this.el).text();
    }
});
