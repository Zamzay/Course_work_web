function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function search() {
  let input = document.getElementById('search_search');
  let input_big = document.getElementById('search_search').value;
  input_big = input_big.toLowerCase();
  let x = document.getElementsByClassName('search_object');

    

  input.addEventListener("keyup", function(event){
    if (event.keyCode ===13){
      for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input_big)) {
          x[i].style.display = "none";
        }
        else {
          x[i].style.display = "";
        }
      }
    }
  }) 
}

function search_small() {
  let input = document.getElementById('search_search_small');
  let input_big = document.getElementById('search_search_small').value;
  input_big = input_big.toLowerCase();
  let x = document.getElementsByClassName('search_object');

    

input.addEventListener("keyup", function(event){
    if (event.keyCode ===13){
      for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input_big)) {
          x[i].style.display = "none";
        }
        else {
          x[i].style.display = "";
        }
      }
    }
  })
  
}



