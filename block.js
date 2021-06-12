class Block{
    constructor(x,y,width,height){
        this.options = {
            restitution: 0.5,
            friction: 1,
            density: 3
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,this.options);
        World.add(world,this.body) 
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER)
        this.block = rect(0,0,this.width,this.height)
        pop()
    }
}