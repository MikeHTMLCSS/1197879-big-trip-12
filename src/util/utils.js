import {RENDER_POSITION} from '../data/constant.js';
export const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element;
};
export const renderElement = (container, element, place) => {
    switch (place) {
        case RENDER_POSITION.afterBegin:
            container.prepend(element);
            break;
        case RENDER_POSITION.beforeEnd:
            container.append(element);
            break;
    }
};
