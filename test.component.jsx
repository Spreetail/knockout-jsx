import registerJSXComponent from './register-jsx-component';

function viewModel() {
    const vm = {};
    vm.whatever = ko.observable('Whatever');
    return vm;
}

function render() {
    return (
        <div>
            <span data-bind="text: whatever">oeuoeu</span>
        </div>
    );
}

registerJSXComponent('test', { viewModel, render });
