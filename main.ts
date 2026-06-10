
/**
 * Bietet Zugriff auf die grundlegende micro:bit Funktion.
 */
let Position = 0
function Greifer(Position2: number, Ziel: number) {
    while (Position2 < Ziel) {
        Position2 += 1
        calliBot2.servo(C2Servo.Servo1, Position2)
        basic.pause(30)
    }
    while (Position2 > Ziel) {
        Position2 += -1
        calliBot2.servo(C2Servo.Servo1, Position2)
        basic.pause(30)
    }
}

basic.forever(function () {

})
