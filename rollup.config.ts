import myExample from './plugins/rollup-plugin-my-example';
export default ({
  input: './src/virtual-module', // resolved by our plugin
  plugins: [myExample()],
  output: [{
    file: './dist/bundle2.js',
    format: 'es'
  }]
});