import { cleanText } from "./module/cleanText.js"
import { toggleMode } from "./module/darkMode.js"
import { decrypt } from "./module/decrypt.js"
import { encrypt } from "./module/encrypt.js"
import { show } from "./module/show.js"

const result = document.querySelector('[data-result]')
const inputText = document.querySelector('[data-text]')

const buttonEncrypt = document.querySelector('[data-encrypt]')
const buttonDecrypt = document.querySelector('[data-decrypt]')
const buttonCopy = document.querySelector('[data-copy]')
const buttonDarkMode = document.querySelector('[data-dark-mode]')

buttonEncrypt.addEventListener('click', () => {
  let text = inputText.value

  if (text != '') {
    show.warning(text)
    text = cleanText(text)
    text = encrypt(text)
    show.buttonCopy(true)
    show.image(false)
    show.result(text)
    inputText.value = ''
  }
})

buttonDecrypt.addEventListener('click', () => {
  let text = inputText.value

  if (text != '') {
    text = decrypt(text)
    show.buttonCopy(true)
    show.image(false)
    show.result(text)
    inputText.value = ''
  }
})

buttonCopy.addEventListener('click', () => {
  const message = document.querySelector('[data-copy-message]')

  navigator.clipboard.writeText(result.textContent)
  message.textContent = 'Copiado para area de tranferencia'
  message.style.display = 'initial'
  
  setTimeout(() => {
    message.style.display = 'none'
  }, 2000)
})

buttonDarkMode.addEventListener('click', () => toggleMode())
