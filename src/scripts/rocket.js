import mobileImg from './assets/images/rocket128.png';
import Mobile from './mobile';
export default class Rocket extends Mobile{
    constructor(x,y,deltaX = 6,deltaY = 0){
        super(x,y,deltaX,deltaY,mobileImg);
    }
    move(canvas){
        if(this.x + this.deltaX + this.image.width < 0 ){
            this.deltaX = -(this.deltaX);
          }
          if(this.y + this.deltaY + this.image.height < 0 || this.y + this.image.height + this.deltaY> canvas.height){
            this.deltaY = -(this.deltaY);
          }
          this.x += this.deltaX ;
          this.y += this.deltaY ;
    }
}