class Rope{
    constructor(bodyA,pointB){
        this.options = {
            bodyA:bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 0.1
        }
        this.constraint = Constraint.create(this.options);
        World.add(world,this.constraint);
    }
    display(){
        var pointA = this.constraint.bodyA.position;
        var pointB = this.constraint.pointB;
        stroke("green");
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}