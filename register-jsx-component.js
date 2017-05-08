function registerJSXComponent(name, { viewModel, render }) {
    let element;
    if (typeof render !== 'function') {
        element = render();
        if (element.outerHTML === 'undefined') {
            throw new TypeError('render() must return a DOM node with an outerHTML property.');
        }
    } else {
        throw new TypeError('render must be a function returning a DOM node.');
    }
    ko.components.register(name, { viewModel, template: element.outerHTML });
}

export default registerJSXComponent;
