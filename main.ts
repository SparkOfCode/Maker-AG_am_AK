namespace MakerAG {

    //%block
    export let Position2 = 120

	//%block
	export function Greifer(Ziel: number) {
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
}
basic.forever(function () {
	
})
