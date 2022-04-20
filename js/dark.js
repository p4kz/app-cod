
window.onload = function() {
  setMode()
}

function setMode() {
  let mode = localStorage.getItem('mode')
  if(!mode) mode = 'light'
  document.body.classList.add(mode)
}

function toggleMode() {
  let element = document.body
  let btn = document.getElementById("darkmode-button")
  let mode = localStorage.getItem('mode')
  
  if(!mode) mode = 'dark'
  
  if(mode == 'dark') {
    localStorage.setItem("mode", "light")
    element.classList.remove("dark")
    element.classList.add("light")
    btn.innerHTML = 'Dark mode' 
  } else {
    localStorage.setItem("mode", "dark")
    element.classList.remove("light")
    element.classList.add("dark")
    btn.innerHTML = 'Light mode'
  }    
}