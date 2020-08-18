import {createElement} from '../util/utils.js';
export default class ElementAbstract {
    constructor() {
        if (new.target === ElementAbstract) {
            throw new Error(`You cannot create an instance of an abstract class.`);
        }
        this._element = null;
    }
    getElement() {
      if (this._element === null) {
        this._element = createElement(this._getTemplate());
      }
      return this._element;
    }
    removeElement() {
      this._element = null;
    }
};
