const tabs = document.getElementsByClassName('tab');

function changeActiveClass(elem) {
  // remove active-tab class from all tabs then add it back to the elem in arg
  for (tab of tabs) {
    tab.classList.remove('active-tab')
  }
  elem.classList.add('active-tab')

  // remove active class from all content then add it back to elem in arg
  let bodyContents = document.getElementsByClassName('content-body')
  for (content of bodyContents) {
    content.classList.remove('active')
  }
  document.getElementById(elem.textContent).classList.add('active')

}


for (tab of tabs) {
  tab.addEventListener('click', function(e) {
    changeActiveClass(e.currentTarget)

  })
}