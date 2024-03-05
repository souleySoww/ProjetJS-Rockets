const RIGHT = Symbol('right');
const LEFT = Symbol('left');
const DOWN = Symbol('down');
const UP = Symbol('up');
const NONE = Symbol('none');


export default class MoveState{
    static get RIGHT(){
        return RIGHT;
    }
    static get LEFT(){
        return LEFT;
    }
    static get DOWN(){
        return DOWN;
    }
    static get UP(){
        return UP;
    }
    static get NONE(){
        return NONE;
    }
}