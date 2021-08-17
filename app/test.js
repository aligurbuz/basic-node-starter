setImmediate(() => {
    console.log('s1');
})

process.nextTick(() => {
    console.log('n1');
})

setImmediate(() => {
    console.log('s2');
})

process.nextTick(() => {
    console.log('n2');
})
