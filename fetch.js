const sendIt = async({item,phone})=>{
await fetch('https://jataroserver.onrender.com:3000/req',{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({item:item,phone:phone})

})}