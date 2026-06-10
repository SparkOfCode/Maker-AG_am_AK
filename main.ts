namespace MakerAG {
    //%block
    export function Greifer(Position: number, Ziel: number) {
        while (Position < Ziel) {
            Position += 1
            calliBot2.servo(C2Servo.Servo1, Position)
            basic.pause(30)
        }
        while (Position > Ziel) {
            Position += -1
            calliBot2.servo(C2Servo.Servo1, Position)
            basic.pause(30)
        }
    }
}
basic.forever(function () {

})
