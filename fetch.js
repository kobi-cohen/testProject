const sendIt = async({item,phone})=>{
await fetch('https://jataroserver.onrender.com/req',{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({item:item,phone:phone})

})}