let mac_img = document.querySelector('.mac')
let btn2 = document.querySelector('.space-grey')
let btn = document.querySelector('.white-block')
let price = document.querySelector('.price')
let txt = document.querySelector('.white')
let tb0 = document.querySelector('.num1')
let tb1 = document.querySelector('.num2')

btn2.onclick = () => {
    mac_img.src = 'картинки/mbp14-silver-select-202110 1.svg'
    btn.style.background = '#CFE7FF'
    btn2.style.background = '#0071E3'
    btn2.style.color = 'white'
    price.innerHTML = '$2,599'
    txt.innerHTML = 'Space Grey'
}

btn.onclick = () => {
    mac_img.src = 'картинки/mbp14-spacegray-select-202110 1.svg'
    btn.style.background = '#0071E3'
    btn2.style.background = '#CFE7FF'
    price.innerHTML = '$1,999'
    txt.innerHTML = 'White'
}

tb1.onclick = () => {
    tb1.style.border = '2px solid #007FFF'
    tb0.style.border = '1px solid #CFE7FF'
    let a = price.innerHTML.replace(/[^0-9]/g,"")
    let c = tb1.getAttribute('sum-price').replace(/[^0-9]/g,"")
    let myNewPrice = +a + +c
    price.innerHTML = +myNewPrice
}

tb0.onclick = () => {
    tb0.style.border = '2px solid #007FFF'
    tb1.style.border = '1px solid #CFE7FF'
    let a = price.innerHTML.replace(/[^0-9]/g,"")
    let c = tb1.getAttribute('sum-price').replace(/[^0-9]/g,"")
    let myNewPrice = +a + +c
    price.innerHTML = +myNewPrice
}
