class Umbrella{
    constructor(x,y){
        var options ={
            'isStatic':true
        }

        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.animation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        World.add(world, this.body);
        this.body.scale = 0.04;
    }
    display(){
        var UmbrellaPos = this.body.position;
    //    imageMode(CENTER);
        animation(this.animation, UmbrellaPos.x, UmbrellaPos.y+70, 50, 50);
    }
}