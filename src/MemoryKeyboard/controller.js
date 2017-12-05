import { EventDispatcher } from '../eventDispatcher.js';
import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';


export class MemoryKeyboard extends EventDispatcher {

    /**
     *  Constructor.  
     */
    constructor() {
        super();
        this._mPlus();
    }

    _mPlus() {
        let viewString = viewTemplate();
        let view = stringToDom(viewString);
        console.log('aaa');
    }

}