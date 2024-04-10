basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 101)
    basic.pause(1000)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M1)
})
