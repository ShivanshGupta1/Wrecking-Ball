class Package {
    constructor(){
        this.options = {
            restitution:0.5
          }
          transalte(helicopterSprite.x,helicopterSprite.y)
          this.packageBody = Bodies.circle(0,0 , 5 , {restitution:0.4, isStatic:true});
          World.add(world, this.packageBody)
    }
    display(){
        packageSprite.x= this.packageBody.position.x 
		packageSprite.y= this.packageBody.position.y 
    }
}