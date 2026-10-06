const EventEmitter = require('events')
const ud = new EventEmitter()

ud.on('greet', (name) => {
    console.log(`Hello there ${name}`)
})


ud.on('exit', (num)=>{
    console.log(`thanks for visiting ${num}`)
})


ud.emit('greet', "Kaavy")
ud.emit('exit', 100)
