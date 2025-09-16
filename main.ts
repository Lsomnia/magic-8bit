input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    randomNumber = randint(0, 4)
    if (randomNumber == 2) {
        basic.showString("Sure, whatever")
    } else if (randomNumber == 1) {
        basic.showString("Absolutely not")
    } else if (randomNumber == 3) {
        basic.showString("404 Answer not found")
    } else if (randomNumber == 4) {
        basic.showString("Ask later")
    } else {
        basic.showString("Hello from github")
    }
    basic.showNumber(8)
})
let randomNumber = 0
basic.showString("Ask away!")
basic.showNumber(8)
basic.forever(function () {
	
})
