
const warning = (text) => {
  const textInvalid = document.querySelector('.clean-text')
  const warningIcon = document.querySelector('.warning span')

  let isValid = /[A-ZÀ-ÿ]/.test(text)

  if (isValid) {
    textInvalid.style.opacity = '1'
    warningIcon.style.color = '#900'

    warningIcon.addEventListener('mouseover', () => {
      textInvalid.style.opacity = '.6'
    })
    
    warningIcon.addEventListener('mouseleave', () => {
      textInvalid.style.opacity = '0'
    })
  }
  
  setTimeout(() => {
    textInvalid.style.opacity = '0'
  }, 4000)
}  

const result = (text) => {
  const result = document.querySelector('[data-result]')
  result.textContent = text
}

const buttonCopy = (boolean) => {
  const btnCopy = document.querySelector('[data-copy]')

  if (boolean) btnCopy.style.display = 'initial'
}

const image = (boolean) => {
  const image = document.querySelector('[data-image]')

  if (!boolean) image.style.display = 'none'
}

export const show = {
  buttonCopy,
  image,
  warning,
  result,
}