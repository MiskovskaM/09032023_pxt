


//let strip = neopixel.create(DigitalPin.P16, 32, NeoPixelMode.RGB)


/* strip.showRainbow(1 , 360)

basic.forever(function(){
    strip.rotate()
    strip.show()
  basic.pause(20)
})
 */



function ping(trig: DigitalPin, echo: DigitalPin, maxCmDistance = 500) : number{
  
pins.setPull(trig, PinPullMode.PullNone) 
pins.digitalWritePin(trig, 0)
control.waitMicros(2)
pins.digitalWritePin(trig, 1)
control.waitMicros(10)
pins.digitalWritePin(trig, 0)

const d = pins.pulseIn (echo, PulseValue.High, maxCmDistance*50)
let sosCoef = 1/ ((331 + 0.007 * (25-4)) / 1000 / 2)
 return Math.round (d / sosCoef)

}

basic.forever(function () {
     let data = ping(DigitalPin.P8, DigitalPin.P15)
      console.logValue("distance", data);
      })