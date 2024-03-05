import mobileImg from './assets/images/basket128.png';
import Mobile from './mobile.js';
import MoveState from './movestate.js';

export default class Basket extends Mobile{
    constructor(x,y,deltaX = 10,deltaY = 10){
        super(x,y,deltaX,deltaY);
        this.image = this.createImage(mobileImg);
        this.moving = MoveState.NONE;
    }

    moveUp(){
        this.moving = MoveState.UP;
    }
    moveDown(){
        this.moving = MoveState.DOWN;
    }

    moveLeft(){
        this.moving = MoveState.LEFT;
    }

    moveRight(){
        this.moving = MoveState.RIGHT
    }
    stopMoving(){
        this.moving = MoveState.NONE;   
    }

    move(canvas){
        if(this.moving === MoveState.LEFT){
            this.x = Math.max(0,this.x - this.deltaX);
        }
        if(this.moving === MoveState.RIGHT){
            this.x = Math.min(canvas.width-this.image.width, this.x + this.deltaX);
        }
        if(this.moving === MoveState.UP){
            this.y = Math.max(0,this.y - this.deltaY);
        }
        if(this.moving === MoveState.DOWN){
            this.y = Math.min(canvas.height - this.image.height , this.y + this.deltaY);
        }

    }


}