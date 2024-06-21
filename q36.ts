//T-Shirt
let  sizeofShirt: string[]=['small', 'medium', 'large']
let shirt1 ="this shirt is for casual wearing"
let shirt2 ="this shirt is for formal wearing"
let shirt3 ="this shirt is for party wearing"

function  make_tshirt(){
    let simpleFunction =`This is a ${ sizeofShirt[1]} shirt, and ${shirt3}`
  console.log(simpleFunction)
  return simpleFunction
}

let response = make_tshirt()
console.log(response)
