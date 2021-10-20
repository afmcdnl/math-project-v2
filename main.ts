input.onButtonPressed(Button.A, function () {
    if (state == 0) {
    	
    } else if (state == 2) {
        guess += -1
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (state == 0) {
        state = 1
    } else if (state == 2) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == 0) {
    	
    } else if (state == 2) {
        guess += 1
    } else {
    	
    }
})
let state = 0
let Numb1 = 0
let Numb2 = 0
state = 0
let answer = 0
let _symbol = 0
let guess = 0
basic.forever(function () {
    if (state == 0) {
    	
    } else if (state == 1) {
        radio.setGroup(1)
        Numb1 = randint(0, 10)
        radio.sendNumber(Numb1)
        radio.setGroup(2)
        _symbol = randint(0, 1)
        radio.sendNumber(_symbol)
        radio.setGroup(3)
        Numb2 = randint(0, 10)
        radio.sendNumber(Numb2)
        if (_symbol == 0) {
            answer = Numb1 + Numb2
        } else {
            answer = Numb1 - Numb2
        }
        state = 2
    } else if (state == 2) {
        basic.showNumber(guess)
    } else {
    	
    }
})
