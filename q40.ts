 //It dosenot include tracks number

//  function make_album1(artistName:string,albumTitle:string){
//         return{artistName, albumTitle}

//  }
//  let album1 = make_album1("Ali Zafar", "psl song")
//  let album2 = make_album1("Atif Aslam", "Ipllsong")
//  let album3 = make_album1("Asim Azhar", "cplsong")

 
//  console.log(album1)
//  console.log(album2)
//  console.log(album3)


//It include tracks number

 function make_album2(artistName:string,albumTitle:string,numberofTracks?: number){
    return{artistName, albumTitle,numberofTracks}

}
let album4 = make_album2("Ali Zafar", "psl song",30)
let album5 = make_album2("Atif Aslam", "Ipllsong",20)
let album6 = make_album2("Asim Azhar", "cplsong")

console.log(album4)
console.log(album5)
console.log(album6)