import React from 'react'

// const
// const harga = 3000;
// var
// var harga = 20000;
// if(true){
//   var harga = 30000;
// }
// let | tidak berubah karena masih dalam 1 scope, var tidak mengenal scope.
let harga = 20000;
if(true){
  let harga = 30000;
}


const Variable = () => {
  return (
    <div>Harga : {harga}</div>
  )
}
export default Variable