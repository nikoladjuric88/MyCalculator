import viewTemplate from './view.hbs';
import stringToDom from 'string-to-dom';


export let viewString = viewTemplate();
export let view = stringToDom(viewString);