import registerJSXComponent from '../src/register-jsx-component';
import ko from 'knockout';

describe('registerJSXComponent', () => {
    it('should be a function', () => {
        expect(registerJSXComponent).to.be.a('function');
    });

    it('should register the component with Knockout', () => {
        const name = 'test-component';
        const component = {
            viewModel: () => ({}),
            jsxTemplate: {
                outerHTML: '<div><span>Hello there!</span></div>'
            }
        };
        registerJSXComponent(name, component);
        expect(ko.components.isRegistered(name)).to.be.true;
    });

    it('should throw a TypeError if component is not defined', () => {
        expect(() => registerJSXComponent('test')).to.throw(TypeError);
    });

    it('should throw a TypeError if jsxTemplate is not defined', () => {
        expect(() => registerJSXComponent('test', {})).to.throw(TypeError);
    });

    it('should throw a TypeError if jsxTemplate.outerHTML is not a string', () => {
        expect(() => registerJSXComponent('test', { jsxTemplate: {} })).to.throw(TypeError);
        expect(() => registerJSXComponent('test', { jsxTemplate: { outerHTML: true } }))
            .to.throw(TypeError);
    });
});
