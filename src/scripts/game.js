import Basket from "./basket.js";
import Egg from "./egg.js";
import MoveState from "./movestate.js";
import Rocket from "./rocket";

export default class Game {
    constructor(canvas,requete = null){
        this.basket = new Basket(50,50);
        this.canvas = canvas;
        this.requete = requete;
        this.context = this.canvas.getContext('2d');
        this.eggs = Array();
        this.rockets = Array();
        this.timerEgg = null;
        this.timerRocket = null;
        this.score = document.getElementById("score");
        this.vie = 3;

    }
    moveAndDraw(){

        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.basket.move(this.canvas); 
        this.basket.draw(this.context); 
        this.eggs.forEach( e => {
            e.move(this.canvas);
            e.draw(this.context);
        });
        this.rockets.forEach( r => {
            r.move(this.canvas);
            r.draw(this.context);
        });
        this.eggs.forEach( e => {
            if(e.collisionWith(this.basket)){
                this.score.textContent = parseInt(this.score.textContent)+100;
            }
        });
        this.rockets.forEach( r => {
            if(r.collisionWith(this.basket)){
                this.score.textContent = parseInt(this.score.textContent) - 500;
                document.getElementById("life-"+this.vie).src = "";
                this.vie = this.vie-1;
            }
        });
        if(this.vie == 0){
            window.alert("Game Over");
        }
        this.rockets = this.rockets.filter( r => !(r.collisionWith(this.basket)));
        this.rockets = this.rockets.filter( r => r.x < this.canvas.width);

        this.rockets.forEach( r =>{
            this.eggs = this.eggs.filter( e => !(e.collisionWith(r)));
        });
        this.eggs.forEach( e => {
            this.rockets = this.rockets.filter( r => !(r.collisionWith(e)));
        });

        this.eggs = this.eggs.filter( e => !(e.collisionWith(this.basket)));
        window.requestAnimationFrame(this.moveAndDraw.bind(this));
      }
    startAndStop(){
        if(this.requete == null){
            this.requete = window.requestAnimationFrame(this.moveAndDraw.bind(this));
            this.timerEgg = setInterval(this.addEgg.bind(this),1000);
            this.timerRocket = setInterval(this.addRockets.bind(this),1000);
           }

          else{
            window.cancelAnimationFrame(this.requete);
            this.requete = null;
            clearInterval(this.timerEgg);
            clearInterval(this.timerRocket);
          }
        }

    keyDownActionHandler(event){
        switch(event.key){
            case "ArrowLeft":
                case "Left":
                    this.basket.moveLeft();
                    break;
            case "ArrowRight":
                case "Right":
                    this.basket.moveRight();
                    break;
            case "ArrowUp":
                case "Up":
                    this.basket.moveUp();
                    break;
            case "ArrowDown":
                case "Down":
                    this.basket.moveDown();
                    break;
        }
        event.preventDefault();
    }

    keyUpActionHandler(event){
        switch(event.key){
            case "ArrowLeft":
                case "Left":
                    this.basket.stopMoving();
                    break;
            case "ArrowRight":
                case "Right":
                    this.basket.stopMoving();                                       
                    break;
            case "ArrowUp":
                case "Up":
                    this.basket.stopMoving();
                    break;
            case "ArrowDown":
                case "Down":
                    this.basket.stopMoving();
                    break;
            default:return;
        }
        event.preventDefault();
    }
    alea(n){
        return Math.floor(Math.random()*n);
    }
    addEgg(){
        this.eggs.push(new Egg(this.alea(this.canvas.width),0));
      }
    addRockets(){
        this.rockets.push(new Rocket(0,this.alea(this.canvas.height)));
    }
          
    
}



