let T1 = 0
let T2 = 0
let T3 = 0
let temperatura = 0
function temperatura_promedio () {
    T1 = input.temperature()
    basic.pause(5000)
    T2 = input.temperature()
    basic.pause(5000)
    T3 = input.temperature()
    return (T1 + (T2 + T3)) / 3
}
basic.forever(function () {
    T1 = input.temperature()
    basic.pause(5000)
    T2 = input.temperature()
    basic.pause(5000)
    T3 = input.temperature()
    basic.showNumber((T1 + (T2 + T3)) / 3)
})
basic.forever(function () {
    basic.showNumber(temperatura_promedio())
})
basic.forever(function () {
    temperatura = temperatura_promedio()
    if (temperatura > 25) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Butterfly)
    }
    basic.pause(500)
    basic.showNumber(temperatura)
})
