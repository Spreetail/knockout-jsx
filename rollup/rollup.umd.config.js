import baseConfig from './rollup.base.config.js';

const umdPartialConfig = {
    format: 'umd',
    moduleName: 'ko.jsx',
    dest: 'dist/knockout-jsx.js'
};

const umdConfig = Object.assign({}, baseConfig, umdPartialConfig);

export default umdConfig;
