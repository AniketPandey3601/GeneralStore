
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/ed93d60f1fc54983b9500a7c85853977/generalstore")
    .then((response)=>{
      console.log(response)

      for(var i=0; i <response.data.length; i++){
        showuseronscreen(response.data[i]);
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  const desc = document.getElementById('desc').value;
const price = document.getElementById('price').value;
const quantity = document.getElementById('quant').value;
const  itemname = document.getElementById('itemname').value;

function handleSubmit(){
    console.log("this is a click")

   
   


    axios.post("https://crudcrud.com/api/ed93d60f1fc54983b9500a7c85853977/generalstore",{

        "itemname":itemname,
        "desc":desc,
        "price":price,
        "quantity":quantity,
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{

        console.log(error);
    })
    document.getElementById('desc').value='';
    document.getElementById('price').value='';
    document.getElementById('quant').value='';
    document.getElementById('itemname').value='';




}

function showuseronscreen(user){
    console.log(user)
  

    document.getElementById("list").innerHTML+=
        
        `<div>
        ${user.itemname}
        ${user.desc}
        ${user.price}
        ${user.quantity}
        <button>Buy1</button>
        <button>Buy2</button>
        <button>Buy3</button>


        </div>`
    



}



