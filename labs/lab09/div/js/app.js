let objects = [

    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
   
   ];


   for(let x = 0; x < objects.length; x++){

    var newDiv = document.createElement("newDiv");
    
    newDiv.style.height = objects[x];
    newDiv.style.width = objects[x];
    newDiv.style.backgroundColor = objects[x];
    
    document.body.appendChild(newDiv);
   }

   console.log(newDiv);