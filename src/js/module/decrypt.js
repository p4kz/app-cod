
export const decrypt = (text) => {
  text = text.replace(/enter/g, 'e')
  text = text.replace(/imes/g, 'i')
  text = text.replace(/ai/g, 'a')
  text = text.replace(/ober/g, 'o')
  text = text.replace(/ufat/g, 'u')
    
  return text
} 