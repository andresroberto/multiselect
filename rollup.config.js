import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'main.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      presets: [['env', { modules: false }], 'react'],
      exclude: 'node_modules/**',
      babelrc: false
    }),
  ]
};