class Terrace{
    constructor(x,y,width,height)  {
    
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        
        
        World.add(world,this.body);
    }

display()
{
    push();
    rectMode(CENTER);
    fill("black");

    rect(this.body.position.x, this.body.position.y,this.width,this.height);
    pop();

}
}
