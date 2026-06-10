//% weight=70 icon="/f0eb"
namespace MakerAG {

    //%block
    export function Greifer(Ziel: number, Position: number) {
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
