/*
 * @Author: your name
 * @Date: 2022-01-06 02:50:20
 * @LastEditTime: 2022-01-06 04:19:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoTs/08typeTs/wideTs.ts
 */
interface Runnable {
    run() : number
}

interface Repairable {
    repair() :void
}

class Car implements Runnable, Repairable {
    run() : number {
        return 1
    }

    repair(): void {
        return
    }
}

class BMW extends Car {

}

// * Generics

class Wood implements Material{
    getHardness() : number{
        return 2.11
    }
}

class Steel implements Material {
    getHardness() : number{
        return 2.22
    }
    getMelted(): number {
        return 34
    }
}

interface Material {
    getHardness() : number;
    getMelted?(): number
}


class DeskMaker<T extends Material> {
    material:T 
    constructor(material: T) {
        this.material = material
    }

    make() : void{
        const hardness : number = this.material.getMelted!()
        console.log(hardness)
    }
}

const desk : DeskMaker<Steel> = new DeskMaker<Steel>(new Steel())
desk.make()

// function identity<T>(arg:T) : T {
//     return arg
// }

// let z = identity(123)

interface Legnth {
    length : number
}

function logIdentity<Type extends Legnth> (arg : Type) {
    console.log(arg.length)
}

logIdentity<string>("123")


type Point = {x:number , y:number}

function foo <T extends keyof Point>(x:T) {

}

function bar<T>(arg: T) {

}

bar<object>({b:1})

function add<T extends number | string> (a: T, b: T) {
    console.log(<any>a + <any>b)
}

add("a",2)