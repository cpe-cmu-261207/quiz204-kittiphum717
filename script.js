const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

calculation.value = 630610717 - length.value

btn_toggle.onclick = () => {
  if(btn_toggle.innerHTML = "Display Calculation"){
    author.innerHTML = calculation.value
    btn_toggle.innerHTML = "Display Author"
  }
  else{
    author.innerHTML = "630610717 KITTIPHUM SANIT"
    btn_toggle.innerHTML = "Display Calculation"
  }
}

// more codes for Search and Reset buttons here
