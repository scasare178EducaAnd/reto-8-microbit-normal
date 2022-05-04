function nuevoEnemigo () {
    EnemigoX = randint(0, 4)
    EnemigoY = 0
    led.plot(EnemigoX, EnemigoY)
}
input.onButtonPressed(Button.A, function () {
    if (JugadorX > 0) {
        led.unplot(JugadorX, 4)
        JugadorX = JugadorX - 1
        led.plot(JugadorX, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (JugadorX < 4) {
        led.unplot(JugadorX, 4)
        JugadorX = JugadorX + 1
        led.plot(JugadorX, 4)
    }
})
let EnemigoY = 0
let EnemigoX = 0
let JugadorX = 0
JugadorX = randint(0, 4)
led.plot(JugadorX, 4)
nuevoEnemigo()
basic.forever(function () {
    if (JugadorX == EnemigoX && EnemigoY == 4) {
        led.unplot(EnemigoX, EnemigoY)
        basic.showIcon(IconNames.Chessboard)
        game.gameOver()
    }
    basic.pause(500)
    if (EnemigoY < 4) {
        led.unplot(EnemigoX, EnemigoY)
        EnemigoY = EnemigoY + 1
        led.plot(EnemigoX, EnemigoY)
    } else {
        led.unplot(EnemigoX, EnemigoY)
        nuevoEnemigo()
    }
})
