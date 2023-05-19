const books = ['Первый учитель', 'Гарри Поттер', 'Ведьмак', 'Шерлок Холмс'];

function booksList () {
    const uBooks = []
    const restBooks = []

    for (let i = 0; i < books.length; i++) {
        if (books[i].includes('м')) {
            uBooks.push(books[i]);
        } else {
            restBooks.push(books[i])
        }
    }
    return {uBooks, restBooks};
}
const {uBooks, restBooks} = booksList(books)

console.log('Есть буква "м":', uBooks);
console.log('Остальные книги:', restBooks);

function printDelimiter() {
    console.log('-'.repeat(100))
}
printDelimiter()

function getAverage(...nums){
    console.log(nums)
    let sum = nums.reduce((a, b) => a+b, 0)
    let average;
    average = sum / nums.length;
    return average;
}
console.log(getAverage(1, 10, 20, 30, 40, 50));
console.log(getAverage(99, 255, 488));
