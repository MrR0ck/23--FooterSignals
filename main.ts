let strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
let _1 = strip.range(0, 1)
let _2 = strip.range(1, 1)
let _3 = strip.range(2, 1)
let Рух = false
let Відлік = 0
basic.forever(function () {
    if (Відлік == 0) {
        Рух = true
        _1.showColor(neopixel.colors(NeoPixelColors.Red))
        Відлік = 8
        while (Відлік > 0) {
            basic.showNumber(Відлік)
            basic.pause(800)
            Відлік += -1
        }
        basic.clearScreen()
    }
    if (Рух == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        _2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        _3.showColor(neopixel.colors(NeoPixelColors.Green))
        Відлік = 9
        while (Відлік > 0) {
            basic.showNumber(Відлік)
            basic.pause(800)
            Відлік += -1
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        Рух = false
    }
})
