//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



//make objects name & price
interface item{
    name: string
    price: number
}
// two objects form
const vegetable: item ={
    name: "tomato"
    price: 100
}

const fruit: item ={
    name: "mango"
    price: 200
}
console.log(`vegetable name: ${vegetable.name}, vegetable price:  ${vegetable.price}`)
console.log(`fruit name: ${fruit.name}, fruit price: ${fruit.price}`)