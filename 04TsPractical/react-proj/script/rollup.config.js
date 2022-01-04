/*
 * @Author: your name
 * @Date: 2022-01-04 06:43:02
 * @LastEditTime: 2022-01-04 06:55:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/04TsPractical/react-proj/script/rollup.config.js
 */
import babel from "@rollup/plugin-babel";
import path from "path";
import typescript from "rollup-plugin-typescript";
export default [
  {
    input: path.resolve(__dirname, "../src/main.tsx"),
    output: {
      file: "build/main.js",
      format: "amd",
      name: "main",
    },

    plugins: [
      typescript(),
      babel({
        presets: ["@babel/preset-react"],
      }),
    ],
  },
];
