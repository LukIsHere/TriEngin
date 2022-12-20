var canva = document.getElementById("screen");
var ctx = canva.getContext("2d");

function setColor(c){
    ctx.fillStyle = c;
}
function clear(){
    setColor("black")
    ctx.fillRect(0,0,100,100);
    setColor("white")
    ctx.fillRect(5,5,90,90)
}
function drawTri(x1,y1,x2,y2,x3,y3,c="black"){
    ctx.strokeStyle = c;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
}

class bone{
    points = [new point()];
    subbones = [];
    constructor(points=[],subbones=[]){
        this.points = points;
        this.subbones = subbones;
    }
}

class point{
    x = 0;
    y = 0;
    constructor(x=(Math.random()*1000)%100,y=(Math.random()*1000)%100){
        this.x = x;
        this.y = y;
    }
}

class tri{
    point = [0];
    color = "";
    constructor(p1,p2,p3,color="black"){
        this.point[0] = p1;
        this.point[1] = p2;
        this.point[2] = p3;
        this.color = color;
    }
}

class obj{
    points = [new point()];
    tris = [new tri()];
    bones = [new bone()];
    constructor(points,tris,bones){
        this.points = points;
        this.tris = tris;
        this.bones = bones;
    }
    draw(){
        this.tris.forEach(tria => {
            let Tpoints = tria.point;
            drawTri(this.points[Tpoints[0]].x,this.points[Tpoints[0]].y,this.points[Tpoints[1]].x,this.points[Tpoints[1]].y,this.points[Tpoints[2]].x,this.points[Tpoints[2]].y,tria.color)
        })
    }
    showPoints(){
        this.points.forEach(p=>{
            setColor("red");
            ctx.fillRect(p.x-2,p.y-2,4,4)
        })
    }

}



var test = new obj(
    [new point(),new point(),new point(),new point()],
    [new tri(0,1,2,"green"),new tri(1,2,3)],
    []
)
clear();
test.draw();
test.showPoints();

setInterval(()=>{
    clear();
    test = new obj(
        [new point(),new point(),new point(),new point()],
        [new tri(0,1,2,"green"),new tri(1,2,3)],
        []
    )
    test.draw();
    test.showPoints();
},1000)