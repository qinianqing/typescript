function greeters(person: string) {
    return "Hello, " + person;
}

var u = [0, 1, 2];
//TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。 这里运行会报错，因为u不是字符串类型,
//这里的就给函数加了一种约定的方式
document.body.innerHTML = greeters(u);