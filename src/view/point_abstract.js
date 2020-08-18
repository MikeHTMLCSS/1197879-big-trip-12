import ElementAbstract from './element_absract.js';
export default class PointAbstract extends ElementAbstract {
    _openListener(container, anotherElement) {
        container.replaceChild(anotherElement, this.getElement());
    }
};
