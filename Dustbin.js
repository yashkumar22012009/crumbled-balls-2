class dustbin{
    constructor(x, y) {
     this.x=x
     this.y=y
     this. dustbinWidth=200 
     this. dustbinHeight=100
     this.wallThickness=20
     this.angle=0 
     this.image=loadImage("dustbingreen.png")
           this.bottomBody = Bodies.rectangle(this.x, this.y,this.dustbinWidth,this.wallThickness,{isStatic:true});
           this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
           Matter.Body.setAngle(this.leftBody,this.angle)


        
           this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});  
           Matter.Body.setAngle(this.rightBody,-1*this.angle)  
           
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
          var posBottom=this.bottomBody.position
          var posleft=this.leftBody.position
          var posright=this.rightBody.position
        
        push();
        translate(posleft.x, posleft.y);
    
        fill (255)
        rectMode(CENTER);
        angleMode(RADIANS)
        stroke(255)
        rotate (this.angle)
        rect( 0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(posright.x, posright.y);
    
        fill (255)
        rectMode(CENTER);
        angleMode(RADIANS)
        stroke(255)
        rotate (-1*this.angle)
        rect( 0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(posBottom.x, posBottom.y);
    
        fill (255)
        imageMode(CENTER);
        angleMode(RADIANS)
        stroke(255)
        
        image( this.image,0,-this.dustbinHeight/2, this.dustbinWidth,this.dustbinHeight );

        pop();
      }
}