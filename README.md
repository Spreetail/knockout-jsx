# knockout-jsx
Use [JSX](https://facebook.github.io/jsx/)
with [Knockout](http://knockoutjs.com/).

JSX is not coupled to React. This little library will enable its use with Knockout instead.

## Installation
Install **knockout-jsx** through npm.
```
npm install --save knockout-jsx
```

Once installed, **knockout-jsx** supports several types of imports.

### ES6
```javascript
import { registerJSXComponent } from 'knockout-jsx';

```

### CommonJS
```javascript
const { registerJSXComponent } = require('knockout-jsx');
// Or...
const knockoutJSX = require('knockout-jsx');
```

### UMD
Referencing either `dist/knockout-jsx.js` or `dist/knockout-jsx.min.js` will add the [API](#api)
methods to `ko.jsx`.
```html
<script src="node_modules/knockout-jsx/knockout-jsx.js"></script>
<!-- Or... -->
<script src="node_modules/knockout-jsx/knockout-jsx.min.js"></script>

```

## Usage
### Build Step
JSX must be transpiled to DOM API methods prior to using this libary.
[nativejsx](https://github.com/treycordova/nativejsx) is recommended.
See the [build tools section of the **nativejsx** readme](https://github.com/treycordova/nativejsx/blob/master/README.md#build-tools)
 for instructions on use with Webpack, Gulp, Grunt, or a shell command.

### Components
This library uses
[Knockout Components](http://knockoutjs.com/documentation/component-overview.html)
and registers components with `ko.components.register()`.

```jsx
import { registerJSXComponent } from 'knockout-jsx';

function CounterViewModel() {
    const self = this;
    self.counter = ko.observable(0);
    self.counterText = ko.computed(() => `Counter is at ${self.counter()}`);
    self.incrementCounter = () => self.counter(self.counter() + 1);
}

const template = (
    <div>
        <div data-bind="text: counterText"></div>
        <button type="button" data-bind="click: incrementCounter"></button>
    </div>
);

registerJSXComponent('counter', { viewModel: CounterViewModel, jsxTemplate: template });
```

Then, in the page markup:
```html
<body>
    <h2>Here's a counter!</h2>
    <counter><!-- component will be rendered here by Knockout --></counter>
</body>
```

## API
### registerJSXComponent(name, component)
Registers a given component with Knockout. This is just a wrapper for `ko.components.register`.

**Arguments**
 - [`name`] (_String_): The name of the component.
 This is the HTML element where a component will be rendered. For example, if a component with the `name` 'counter' is passed to this method, the component will be rendered wherever a `<counter></counter>` tag appears in the page markup.
 - [`component`] (_Object_): The component object. This must have the following properties:
    - [`viewModel`] (_Function_): The view model definition for the component.
    - [`jsxTemplate`] (_Object_): The JSX template object to use for the component. A build tool must convert the JSX markup to DOM API methods prior to calling `registerJSXComponent`.
    As such, this should actually be an 
