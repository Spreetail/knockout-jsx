import registerJSXComponent from './register-jsx-component';
import './test.component.jsx';

function viewModel() {
    const vm = {};
    vm.counter = ko.observable(0);
    vm.text = ko.computed(() => `Hello from JSX, counter is ${vm.counter()}.`);
    vm.click = () => vm.counter(vm.counter() + 1);
    return vm;
}

function render() {
    return (
        <div>
            <test />
            <button type="button" data-bind="click: click">Update Counter</button>
            <div data-bind="text: text"></div>
        </div>
    );
}

registerJSXComponent('hello-world', { render, viewModel });
