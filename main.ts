input.onButtonPressed(Button.B, function () {
    hackbitmotors.MotorStopAll()
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
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        85,
        hackbitmotors.Motors.M1B,
        -45
        )
        basic.pause(100)
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1A, 80, 2)
        hackbitmotors.MotorRunDelay(hackbitmotors.Motors.M1B, 80, 2)
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        0,
        hackbitmotors.Motors.M1B,
        85
        )
        basic.pause(100)
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        85,
        hackbitmotors.Motors.M1B,
        85
        )
    } else {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        90,
        hackbitmotors.Motors.M1B,
        90
        )
    }
})
