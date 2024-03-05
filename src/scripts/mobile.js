import mobileImg from './assets/images/basket128.png';
export default class Mobile{
    constructor(x,y,deltaX = 0,deltaY = 0,image = mobileImg){
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.image = this.createImage(image);
    }

    draw(context){
        context.drawImage(this.image,this.x,this.y,this.image.width,this.image.height);
    }
    move(canvas){
        if(this.x + this.deltaX + this.image.width < 0 || this.x + this.image.width + this.deltaX > canvas.width){
            this.deltaX = -(this.deltaX);
          }
          if(this.y + this.deltaY + this.image.height < 0 || this.y + this.image.height + this.deltaY> canvas.height){
            this.deltaY = -(this.deltaY);
          }
          this.x += this.deltaX ;
          this.y += this.deltaY ;
    }
    createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }
    get width(){
        return this.image.width;
    }
    get height(){
        return this.image.height;
    }
    collisionWith(mobile){
        return (Math.max( this.x,mobile.x )) < (Math.min( this.x + this.image.width , mobile.x + mobile.width))
        && (Math.max(this.y,mobile.y)) < (Math.min( this.y + this.image.height , mobile.y + mobile.height));    
    }
}