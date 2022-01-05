/*
 * @Author: your name
 * @Date: 2022-01-05 23:50:33
 * @LastEditTime: 2022-01-06 02:33:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/08typeTs/narrowTs.ts
 */

function printAll(strs:  string[] |object | string ) {
    if (strs && typeof strs === "object") {
        for (let y of strs) {
            console.log(y)
        }
    }
}

printAll({})

// * type assertion && type predicate

class Fish {
    swim() {

    }
}

class Bird {
    fly() {

    }
}

function isFish(pet: Fish | Bird) : pet is Fish{
                                    // * narrow the type for pet 
    return pet instanceof Fish
}

function foo(pet: Fish | Bird) {
    if(isFish(pet)) {
        // * Property 'swim' does not exist on type 'Fish | Bird'.
        // *  Property 'swim' does not exist on type 'Bir
        pet.swim()
    }
}