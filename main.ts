let y = 0
input.onButtonPressed(Button.A, function () {
    y = input.lightLevel()
    basic.showNumber(y)
    if (y < 50) {
        led.setBrightness(255)
    } else if (y >= 50 && y < 100) {
        led.setBrightness(128)
    } else if (y >= 100 && y < 200) {
        led.setBrightness(64)
    }
    if (y >= 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    led.setBrightness(255 - input.lightLevel())
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
