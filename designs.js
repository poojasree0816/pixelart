//takes input of height and width and makes the Grid

function makeGrid(event){

  event.preventDefault();
  var height=document.querySelector("#inputHeight").value;
  var width=document.querySelector("#inputWidth").value;

  var table=document.querySelector("table");
  for(var i=0; i<height;i++){

    var newtr=table.insertRow(i);

    for(var j=0; j<width; j++){
      var newtd=newtr.insertCell(j);
      newtd.classList.add("td");
    }

  }


}
//when the mouse is clicked on "td" it fills with the selected colour

document.querySelector("table").addEventListener("click",function(event){
  event.preventDefault();
  console.log(event);
  var color=document.querySelector("#colorPicker").value;

  var fillcolour=event.path[0];
  if(fillcolour.classList[0]==="td"){
    fillcolour.style.backgroundColor=color;

  }





});



//calls makegrid function when submit button is clicked
var submitButton=document.querySelector(".submit-button");
submitButton.addEventListener("click",makeGrid);


//resets when user clicks onn reser button
var returnButton=document.querySelector(".restart-button");
returnButton.addEventListener("click",function(event){
  event.preventDefault();
  document.querySelector("table").remove();

})
