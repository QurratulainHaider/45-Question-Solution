let size: string[]=['medium', 'large']

let defultMessage ="I love typescript"
let mediumShirt = (`Size of shirt is : ${size[0]},${defultMessage}`)
let largeShirt = (`Size of shirt is : ${size[1]},${defultMessage}`)
let smallShirt =(`Size of shirt is : small and i love paintaing`)
let extraLarge =(`Size of shirt is : extralarge and i love hiking`)

function make_tshirt(){
    let simpleFunction =(extraLarge)
    console.log(simpleFunction)
    return simpleFunction
}
let response = make_tshirt()
console.log(response)