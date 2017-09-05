function greeters(person) {
    return "Hello, " + person;
}
var u = [0, 1, 2];
//TypeScript里的类型注解是一种轻量级的为函数或变量添加约束的方式。 这里运行会报错，因为u不是字符串类型
document.body.innerHTML = greeters(u);
