function formatNum(num) {
    const [first, last] = (num + '').split('.')
    return first.split('').reduceRight((res, cur, index) => {
        index !== 0 && (first.length - index) % 3 === 0 ? res.unshift(',', cur) : res.unshift(cur)
        return res
    }, []).join('')
}
console.log(formatNum(1234567890))
//0123456