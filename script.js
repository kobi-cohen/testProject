console.log('script was loaded')


const inputSell = document.getElementById('inputSell')
const inputPhone = document.getElementById('inputPhone')
const inputEmail = document.getElementById('inputEmail')
const sendBtn = document.getElementById('sendBtn')
const body = document.querySelector('body')
const playGround = document.createElement('div')
playGround.classList.add('playGround')
body.appendChild(playGround)
let nlist = []


const sellItemList =[]
const draw= () =>{
    playGround.innerHTML=''
    array.map(({sell,phone,email})=>{
        const item = document.createElement('div')
        item.classList.add('item')
        item.innerHTML='<h3>הפריט שאני מחפש :</h3><br>'
        item.innerHTML+=`<h4>מחפש לקנות : ${sell}  </h4> `
        item.innerHTML+=`<h4>הטלפון שלי הוא  : ${phone}  </h4> `
        if(email.length>5)
            item.innerHTML+=`<h4>אימייל : ${email}  </h4> `
        playGround.appendChild(item)
    })
}
const drawTable= (array) =>{
    playGround.innerHTML=''
    array.map(({item,phone})=>{
        const itemBox = document.createElement('div')
        itemBox.classList.add('item')
        itemBox.innerHTML='<h3>הפריט שאני מחפש :</h3><br>'
        itemBox.innerHTML+=`<h4>מחפש לקנות : ${item}  </h4> `
        itemBox.innerHTML+=`<h4>הטלפון שלי הוא  : ${phone}  </h4> `
        // if(email.length>5)
        //     itemBox.innerHTML+=`<h4>אימייל : ${email}  </h4> `
        playGround.appendChild(itemBox)
    })
}

const clearinputs = () =>{
    inputSell.value=''
    inputPhone.value=''
    inputEmail.value=''

}
const storInputs = () =>{
    const obj = {
        sell : inputSell.value,
    phone : inputPhone.value,
    email : inputEmail.value,

}
if (obj.sell !='' && obj.phone!=''){

    sellItemList.push(obj)
}
console.log(sellItemList)
sendIt({item:obj.sell,phone:obj.phone})
clearinputs()
draw()
}

sendBtn.addEventListener('click',storInputs)
// window.addEventListener('load',getIt)

const gi = async ()=>{
    const itms = await getIt()
    nlist = [...itms]
    drawTable(nlist)
}

    gi()
