import registerJSXComponent from './register-jsx-component';

function viewModel() {
    const vm = {};
    vm.whatever = ko.observable('Whatever');
    return vm;
}

const jsxTemplate = (
    <div>
        <span data-bind="text: whatever">oeuoeu</span>
    </div>
);

registerJSXComponent('test', { viewModel, jsxTemplate });
