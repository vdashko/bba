const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({
         modifyVars: {
             "@primary-color": "#1DA57A" ,
             "@layout-header-background": "#F3F3F3"
         }
    })(config, env);
    return config;
};