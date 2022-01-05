/*
 * @Author: your name
 * @Date: 2022-01-04 18:18:18
 * @LastEditTime: 2022-01-05 04:51:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/08typeTs/example02.ts
 */

import { Dir } from "fs"


// * give the strict type rules a nickName
type Point = {
    x: number,
    y: number,
    // * z key is optional with ?
    z? : { o: Function}
}

const pt: Point = {
    x : 1,
    y: 1,
    z : {
        o: () => 1
    }
}

// * will to the optional chain test same as pt.z && pt.z.o
// * be careful with :any type
const test = pt.z?.o()


// * | means combine different types together, can be number or string
function printId (id : number | string) {
    // * narrow the type fo the parameter, so some type prototype function can be used 
    // * Type Guard
    if (typeof id === "number") {
        // * make the float with 2 decimal
        id.toFixed(2)
        return 
    }
    console.log(id.toUpperCase())
}


// * interface for class 接口
interface Example {
    x : number,
    y: number
}

// * can combine
interface Example {
    z: number
}

class A implements Example {
    x: number
    y: number
    z: number
}

// * HTMLCanvasElement
// * Type Assertion while user get understanding than the TS
const ele = document.getElementById("canvas") as HTMLCanvasElement

ele.getContext('2d')

function compare (a: string, b: string ) : 1|0|-1 {
    return a > b ? 1: (a===b) ? 0 : -1
}

const y = compare("abc","def")

switch(y) {
    case 1: console.log(123)
    case 0: console.log(123)
    case -1:    console.log(123)
}

type State = "logined" | "not-login"

// * can choose
const state : State = "not-login"

function handleRequest(url: string, method: "GET" | "POST") {
    // TODO
}

const req = {
    url: "example.com",
    // * 字面类型补充， 因为会被认为是string type 而不是 "GET" | "POST" type
    method: "GET" as "GET"
}

handleRequest(req.url, req.method)

enum Direction {
    UP = 1,
    DOWN
}

// * 反向映射 enum
console.log(Direction[Direction.UP])
function foo (s: Direction) {
    switch(s) {
        case Direction.DOWN:
        case Direction.UP:
    }
}