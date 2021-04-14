
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
   ];


   for(let x = 0; x < objects.length; x++){

    var newDiv = document.createElement("div");
    
    newDiv.style.backgroundColor = objects[x].color;
    newDiv.style.height = objects[x].height + "px";
    newDiv.style.width = objects[x].width + "px";
    
    document.body.appendChild(newDiv);
   }

   /* objects: 3
   loop to create enough elements within the array
   */