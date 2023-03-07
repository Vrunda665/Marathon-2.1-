const container = document.getElementById("container");
const b1 = document.getElementById("b1");
const ers = document.getElementById("ers");
const cd = document.getElementById("colorDialog");
let count = 0;

b1.addEventListener("click", function() {
  cd.focus();
  cd.value = "#FFCC00";
  cd.click();
});

function getColor() {
  var color = cd.value;
  b1.style.background = color;
}
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  
  b1.addEventListener("click"  , function(){
    cell.addEventListener("mouseover", function() {
      cell.style.backgroundColor = "white";
  });
      
  cell.addEventListener("mouseout", function() {
      var bc = cd.value;
      count++;
      cell.style.backgroundColor = bc;
      if(count > 10){
        cell.style.backgroundColor = "black";
      }
  });
  });
    
  ers.addEventListener("click" ,function() {
    cell.addEventListener("mouseover", function() {
      cell.style.backgroundColor = "white";
  });
      
  cell.addEventListener("mouseout", function() {
      cell.style.backgroundColor = "white";
  });
  });
  };

};

function fun() {  
  var a = prompt("Enter No of Square per side : ", "10");  
  if (a != null) {  
  //document.getElementById("para").innerHTML = "Welcome to " + a;
  makeRows(a, a);
  
  }  
  }




