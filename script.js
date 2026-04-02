function toggleMode() {
  const html = document.documentElement

  const img = document.querySelector("#profile img")

  html.classList.toggle('luz')

  if (html.classList.contains('luz')) {
    img.setAttribute('src', './Avatar.png')
  } else {
    img.setAttribute('src', './Avatarluz.png')
  }
}