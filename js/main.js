
function encrypt() {
  let textUser = document.querySelector('#textUser').value
  let textTemp = ''

  textUser = textUser.toLowerCase()
  for (let i = 0 ; i < textUser.length ; i++) {
    textTemp += enc(textUser[i])
  }

  document.querySelector('.result').innerHTML = textTemp
}

function enc(text) {
  switch(text) {
    case 'a':
      return '/'
        break
  }

  switch(text) {
    case 'b':
      return '('
        break;
  }

  switch(text) {
    case 'c':
      return ')'
        break
  }

  switch(text) {
    case 'd':
      return '|'
        break
  }

  switch(text) {
    case 'e':
      return '['
        break
  }

  switch(text) {
    case 'f':
      return '~'
        break;
  }
  
  switch(text) {
    case 'g':
      return '^'
        break
  }

  switch(text) {
    case 'h':
      return '´'
        break
  }

  switch(text) {
    case 'i':
      return '{'
        break;
  }
  
  switch(text) {
    case 'j':
      return '?'
        break
  }

  switch(text) {
    case 'k':
      return '*'
        break
  }

  switch(text) {
    case 'l':
      return '¨'
        break;
  }
  
  switch(text) {
    case 'm':
      return '@'
        break
  }

  switch(text) {
    case 'n':
      return '#'
        break
  }

  switch(text) {
    case 'o':
      return '%'
        break;
  }
  
  switch(text) {
    case 'p':
      return '!'
        break
  }

  switch(text) {
    case 'q':
      return '='
        break
  }

  switch(text) {
    case 'r':
      return '+'
        break;
  }
  
  switch(text) {
    case 's':
      return ';'
        break
  }

  switch(text) {
    case 't':
      return '<'
        break
  }

  switch(text) {
    case 'u':
      return '>'
        break;
  }
  
  switch(text) {
    case 'v':
      return 'x'
        break
  }

  switch(text) {
    case 'w':
      return '$'
        break
  }

  switch(text) {
    case 'x':
      return '"'
        break
  }

  switch(text) {
    case 'y':
      return '-'
        break
  }

  switch(text) {
    case 'z':
      return '`'
        break
  }

  switch(text) {
    case ' ':
      return '&&'
        break
  }
}