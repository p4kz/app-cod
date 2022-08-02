
export const encrypt = (text) => {  
  text = text.replace(/e/g, 'enter')
  text = text.replace(/i/g, 'imes')
  text = text.replace(/a/g, 'ai')
  text = text.replace(/o/g, 'ober')
  text = text.replace(/u/g, 'ufat')

  return text
}