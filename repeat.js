// function repeat (func, times, wait) {
//   if (0 >= times) return;
//   let f = function (...args) {
//     let context = this;
//     setTimeout(function () {
//       func.apply(context, args);
//       if (--times > 0) f.call(context,args);
//     }, wait)
//   }
//   return f;
// }


async function sleep(fn, wait, args) {
  return new Promise((resolve) => {
    // setTimeout(() => {
      fn.apply(this, args)
      resolve()
    // }, wait)
  })
}
function repeat(func, times, wait) {
  return async function() {
    for (let i = 0; i < times; i++) {
      await sleep(func, wait, arguments)
    }
  }
}
var repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('helloworld')
