//布尔值
let isDone:boolean = false;
//Number,支持二、八、十六十进制
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//字符串
let names: string = "bob";
names = "smith";
//可以使用模版字符串，它可以定义多行文本和内嵌表达式。
// 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;
let sentences: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
//数组
//第一种命名的方式，通常的JS用法
let list: number[] = [1, 2, 3];
//第二中命名的方式,数组泛型
let list1: Array<number> = [1, 2, 3];
let list2:Array<number> = [2,3,4];
//元组,可以表示已知元素的数量和类型
let x:[number,string];
//这是一种正确的写法
// x = [3,'hello'];
//这是一种错误的写法
// x = ['number',4];
//substr是字符串拥有的方法，但是Number是没有这种方法的
// console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1));
//当访问一个越界的元素，会使用联合类型替代
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
// x[6] = true; // Error, 布尔不是(string | number)类型
//枚举，enum类型是对JavaScript标准数据类型的一个补充。
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
//Any，对一些不清楚的变量,可以代表任何类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
//void，与Any恰恰相反，指没有任何类型，其实没有任何意义，因为它只能赋予undefined和null
function warnUser(): void {
    alert("This is my warning message");
}
let unusable:void = undefined;
let unusables:void = null;
//undefined和null，是所有类型的子类型，也就是说你可以把它赋给number类型的变量
//你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。 
//这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined
let u: undefined = undefined;
let n: null = null;
//Never类型表示永不存在的值的类型，never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是
//never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
//类型断言
//①‘尖括号’的语法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//②as的语法
let someValues: any = "this is a string";
let strLengths: number = (someValue as string).length;


