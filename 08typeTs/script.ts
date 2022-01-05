/*
 * @Author: your name
 * @Date: 2022-01-04 17:51:06
 * @LastEditTime: 2022-01-04 18:27:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/08typeTs/script.ts
 */

// * all the elements in the array are string type
const a = new Array<string>()

// * type of key is string, type of the value is number for an object
const b : {[key: string]: number}= {x:1}

let value : unknown

value = true
value = 42

// * unknown type value cannot be assigned to a specific type value2
let value2 : string =  value

// * the type for the function parameter is string, the return value should be a number type
function greet(name : string) : number {
    console.log(name)
    return 1
}


const names = ["apple","banana"]

names.map(value => {
    // * the value type is string from the names array, typescript will know that automatically, predict the type for you
    const y : string = value
    // * contexual mapping
})

