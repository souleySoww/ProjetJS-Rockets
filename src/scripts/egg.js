import Mobile from './mobile.js';
const eggtab = Array();
import img1 from './assets/images/blue-egg64.png';
import img2 from './assets/images/green-egg64.png';
import img3 from './assets/images/yellow-egg64.png';
eggtab.push(img1);
eggtab.push(img2);
eggtab.push(img3);

export default class Egg extends Mobile{
    constructor(x,y,deltaX=0,deltaY=4){
        super(x,y,deltaX,deltaY,eggtab[Egg.alea(3)]);
    }

    static alea(n){
        return Math.floor(n*Math.random());
    }
    move(canvas){
        if(this.x + this.deltaX + this.image.width < 0 || this.x + this.image.width + this.deltaX > canvas.width){
            this.deltaX = -(this.deltaX);
        }
          if(this.y + this.deltaY + this.image.height < 0 ){
            this.deltaY = -(this.deltaY);
          }
          this.x += this.deltaX ;
          this.y += this.deltaY ;
    }
}