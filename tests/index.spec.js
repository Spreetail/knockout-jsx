import { registerJSXComponent } from '../src/index';

describe('src/index.js', () => {
    it('should export a registerJSXComponent function', () => {
        expect(registerJSXComponent).to.be.a('function');
    });
});
