strip = neopixel.create(DigitalPin.P1, 3, NeoPixelMode.RGB)
_1 = strip.range(0, 1)
_2 = strip.range(1, 1)
_3 = strip.range(2, 1)
Рух = False
Відлік = 0

def on_forever():
    global Рух, Відлік
    if Відлік == 0:
        Рух = True
        _1.show_color(neopixel.colors(NeoPixelColors.RED))
        Відлік = 5
        while Відлік > 0:
            basic.show_number(Відлік)
            basic.pause(800)
            Відлік += -1
        basic.clear_screen()
    if Рух == True:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        _2.show_color(neopixel.colors(NeoPixelColors.YELLOW))
        basic.pause(2000)
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        _3.show_color(neopixel.colors(NeoPixelColors.GREEN))
        Відлік = 9
        while Відлік > 0:
            basic.show_number(Відлік)
            basic.pause(800)
            Відлік += -1
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        Рух = False
basic.forever(on_forever)
