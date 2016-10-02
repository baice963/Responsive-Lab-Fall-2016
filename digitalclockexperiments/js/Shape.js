var Shape = function(ctx) {
  this.context = ctx; // this is a thing dedicated to prototypes
}

Shape.prototype = {
//we are using a different way of declaring a function

  drawTriangle: function(x,y,sideX,sideY){
    this.context.moveTo(x,y);
    this.context.lineTo(x+sideX,y);
    this.context.lineTo(x+sideX/2, y-sideY);
    this.context.lineTo(x,y);

  },

  drawCoolImage: function(x,y,sideX,sideY,number){
    if(number != ":"){
      number = parseInt(number); //parseInt will transform a number that is in a string into a number
    } else {
      number = 6;
    }
    x+= Math.random()*number;
    y+= Math.random()*number;
    this.context.drawImage(image,x,y);
  },


  drawCrazyTriangle: function (x,y,sideX,sideY,number) {
    if(number != ":"){
      number = parseInt(number); //parseInt will transform a number that is in a string into a number
    } else {
      number = 6;
    }
    x+= Math.random()*number;
    y+= Math.random()*number;
    this.context.moveTo(x,y);
    this.context.lineTo(x+sideX,y);
    this.context.lineTo(x+sideX/2, y-sideY);
    this.context.lineTo(x,y);

  },


  drawRect: function(x,y,sideX,sideY, number){
    if(number != ":"){
      number = parseInt(number); //parseInt will transform a number that is in a string into a number
    } else {
      number = 6;
    }
    x+= Math.random()*number;
    y+= Math.random()*number;
    this.context.moveTo(x,y);
    this.context.lineTo(x,y+sideY);
    this.context.lineTo(x+sideX, y+sideY);
    this.context.lineTo(x+sideX,y);
    this.context.lineTo(x,y);

  },

drawLines: function(x,y,sideX,sideY, number){
if (number != ":") {
  number = parseInt(number);
} else {
  number = 6;
}
  this.context.moveTo(x,y);
  this.context.lineTo(x,y+sideY*(-20));
  //this.context.lineTo(x+sideX, y+sideY);
  this.context.lineTo(x+sideX,y*5);

},


}

//thre things that are specific to prototypes:
//1. variables that are defined by functions
//2. creation of a prototype
//3. global variable this.blahblahblah

















//////////////-------Arrays and Objects-------//////////////
// var array = [1,2,3];
// array[0]; //==> 1
// var object = {"myNumber":1,"myOtherNumber":"two", "myLastNumber":3,"myArray": [1,2,3], "myFunction": function()};
// //an object is slightly different from an array //an object can store numbers but they require definition
// //in the object you can store functions
// //if I want to retrieve one from my object:
// object.myNumber //==> 1
// object.myOtherNumber //==> two
