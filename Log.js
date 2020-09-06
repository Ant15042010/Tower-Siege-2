class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/rect1.png");
    Matter.Body.setAngle(this.body, angle);
  }
  display(){
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.v = this.v - 5;
       tint(255,this.v);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
  }
}