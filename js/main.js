
const textUser = document.querySelector('#textUser')
const result = document.querySelector('.result')
const copy = document.querySelector('.btn-copy')
const msgCopy = document.querySelector('.msg-copy')
const imgInit = document.querySelector('.img-init')

let textTemp = ''

function encrypt() { 
  if (textUser.value != "") {
    textTemp = textUser.value
    textTemp = clearText(textUser.value)
    textTemp = textTemp.replace(/e/g, "enter")
    textTemp = textTemp.replace(/i/g, "imes")
    textTemp = textTemp.replace(/a/g, "ai")
    textTemp = textTemp.replace(/o/g, "ober")
    textTemp = textTemp.replace(/u/g, "ufat")
    
    result.textContent = textTemp
    copy.style.display = 'initial'
    imgInit.style.display = 'none'
    textUser.value = ""
  }
}

function decrypt() {
  if (textUser.value != "") {
    textTemp = textUser.value.replace(/enter/g, "e")
    textTemp = textTemp.replace(/imes/g, "i")
    textTemp = textTemp.replace(/ai/g, "a")
    textTemp = textTemp.replace(/ober/g, "o")
    textTemp = textTemp.replace(/ufat/g, "u")
    
    result.textContent = textTemp
    copy.style.display = 'initial'
    textUser.value = ""
  }
}

function clearText(text) {
  text = text.toLowerCase()                                                      
  text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a')
  text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e')
  text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i')
  text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o')
  text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u')
  text = text.replace(new RegExp('[Ç]','gi'), 'c')
  return text                  
}

function copyText() {
  navigator.clipboard.writeText(result.textContent)
  msgCopy.style.display = 'initial'

  setTimeout(() => {
    msgCopy.style.display = 'none'
  }, 2000)
}
