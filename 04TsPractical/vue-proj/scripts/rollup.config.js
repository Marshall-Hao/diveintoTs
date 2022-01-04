import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'
export default [{
  input : path.resolve(__dirname, "../src/main.tsx"),
  output : {
    file : "build/main.js",
    format : 'commonjs',
    name : 'main'
  },

  plugins : [
    vue(),
    typescript(),
    babel({
      exclude : "node_modules/**",
      extensions : [".js", ".jsx", ".tsx", ".ts"],
      presets : [
        "@babel/preset-env",
        "@babel/preset-typescript"
      ],
      plugins : [
        "@vue/babel-plugin-jsx"
      ]
    })
  ]
}]