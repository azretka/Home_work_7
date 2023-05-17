var list = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк", null, `uioo`]
var answer = []
var numbers= []
var nulls = []
var undefineds = []
var strings = []

for (var i of list){
    if(i === Number(i)){
        numbers.push(i)
    }else if(i === String(i)){
        strings.push(i)
    }else if(i === null){
        nulls.push(i)
    }else if(i === undefined){
        undefineds.push(i)
    }
}
answer.push(numbers)
answer.push(nulls)
answer.push(undefineds)
answer.push(strings)

console.log(answer.sort((w, q) => q.length - w.length))