import ko from 'knockout';

function registerJSXComponent(name, { viewModel, jsxTemplate }) {
    if (typeof jsxTemplate === 'undefined') {
        throw new TypeError('jsxTemplate is not defined.');
    } else if (typeof jsxTemplate.outerHTML !== 'string') {
        throw new TypeError('jsxTemplate must have an outerHTML string property.');
    }
    ko.components.register(name, { viewModel, template: jsxTemplate.outerHTML });
}

export default registerJSXComponent;
