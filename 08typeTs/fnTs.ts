/*
 * @Author: your name
 * @Date: 2022-01-06 15:50:26
 * @LastEditTime: 2022-01-06 16:21:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/08typeTs/fnTs.ts
 */

function combine<T> (arr1: T[], arr2: T[]) : T[] {
    return arr1.concat(arr2)
}

combine<string|number >([1,2,3], ["hello"])

// * 函数重载