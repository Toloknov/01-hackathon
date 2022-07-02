import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(type,text){
        super(type='randomColor',text='Рандомный цвет' )
    }
    trigger(){
        console.log('hello');
    }

    toHTML(parent) {
    parent.insertAdjacentHTML("beforeend", super.toHTML());
  }
}