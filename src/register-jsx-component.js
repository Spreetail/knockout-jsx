import ko from 'knockout';
import getOuterHTML from './utils/get-outer-html';

function registerJSXComponent(name, { viewModel, jsxTemplate }) {
    if (typeof jsxTemplate === 'undefined') {
        throw new TypeError('jsxTemplate is not defined.');
    } else if (typeof jsxTemplate.tagName !== 'string'){
        throw new TypeError('jsxTemplate must be an Element with a valid tagName string property.');
    }
    const template = getOuterHTML(jsxTemplate);
    ko.components.register(name, { viewModel, template });
}

export default registerJSXComponent;
