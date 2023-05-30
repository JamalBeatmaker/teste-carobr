input.onButtonPressed(Button.A, function () {
    hackbitmotors.MotorRun(hackbitmotors.Motors.M1B, 100)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    hackbitmotors.MotorStopAll()
    basic.showLeds(`
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    hackbitmotors.MotorRun(hackbitmotors.Motors.M1A, 100)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
let distancia = 0
led.enable(false)
basic.forever(function () {
    distancia = hackbitsensor.us_sonar(
    DigitalPin.P13,
    DigitalPin.P14,
    hackbitsensor.PingUnit.cm
    )
    if (distancia <= 10) {
        hackbitmotors.MotorStopAll()
    } else {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        255,
        hackbitmotors.Motors.M1B,
        255
        )
    }
})
