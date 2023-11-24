const serverAddress = 'https://jataroserver.onrender.com'
const tempAddress = 'http://127.0.0.1:3000/req'

const sendIt = async({item,phone})=>{
await fetch(`${serverAddress}/req`,{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({item:item,phone:phone})

})}

const getIt = async () =>{
    const req=await fetch(`${serverAddress}/res`)

    const data = await req.json()
    // console.log(data)
    return data
}