import ko from 'knockout';

function registerJSXComponent(name, component) {
    if (typeof component === 'undefined') {
        throw new TypeError('component is not defined.');
    }
    const { jsxTemplate, viewModel } = component;
    if (typeof jsxTemplate === 'undefined') {
        throw new TypeError('jsxTemplate is not defined.');
    } else if (typeof jsxTemplate.outerHTML !== 'string'){
        throw new TypeError('jsxTemplate must be an Element with a valid outerHTML string property.');
    }
    const template = jsxTemplate.outerHTML;
    ko.components.register(name, { viewModel, template });
}

export default registerJSXComponent;
