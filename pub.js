class Pub {
    constructor() {
        this.subs = {}
    }
    add(key, fn) {
        const arr = this.subs[key] || []
        if (arr.findIndex(e => e === fn) === -1) {
            arr.push(fn)
            this.subs[key] = arr
        }
    }
    remove(key, fn) {
        const arr = this.subs[key]
        if (!arr || !arr.length) return
        const index = arr.findIndex(e => e === fn)
        if (index !== -1) {
            arr.splice(index, 1)
        }
    }
    once(key, fn) {
        const fn2 = () => {
            console.log('fn2 in', this)
            fn.apply(this)
            this.remove(key, fn2)
        }
        console.log('fn2 out', this)
        this.add(key, fn2)
    }
    emit(key) {
        const arr = this.subs[key]
        if (!arr || !arr.length) return
        arr.forEach(fn => {
            fn.apply(this)
        })
    }
}
let ss = new Pub()
fn = () => console.log(111)
ss.add('a', fn)
ss.emit('a')
ss.add('b', fn)
ss.emit('b')
ss.remove('a', fn)
ss.once('c', fn)
ss.emit('c')
console.log(ss)