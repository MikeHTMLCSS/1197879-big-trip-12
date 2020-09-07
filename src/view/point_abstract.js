import ElementAbstract from './element_absract.js';
export default class PointAbstract extends ElementAbstract {
    _openListener(container, anotherElement, cb) {
        cb();
        container.replaceChild(anotherElement, this.getElement());
    }
};
