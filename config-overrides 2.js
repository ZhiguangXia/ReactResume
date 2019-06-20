const rewireAliases = require('react-app-rewire-aliases');
const { override, fixBabelImports } = require('customize-cra');
const { paths } = require('react-app-rewired');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    }),
);