class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/rect.png");
    this.v = 255;
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
};