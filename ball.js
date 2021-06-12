class Ball {
    constructor(x,y,radius){
        this.options = {
            restitution:0.5,
             density: 5
          }
          this.radius = radius
          
          this.body = Bodies.circle(x,y,radius,this.options);
          World.add(world, this.body)
    }
    display(){
        ellipseMode(RADIUS)
        this.ball = ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}