// var __rest = (this && this.__rest) || function (s, e) {
//     var t = {};
//     for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
//         t[p] = s[p];
//     if (s != null && typeof Object.getOwnPropertySymbols === "function")
//         for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
//             t[p[i]] = s[p[i]];
//     return t;
// };
// let [first,...second] =[1,2,3,4]
// console.log(first);
// console.log(second);
// let [, seconds, , fourth] = [1, 2, 3, 4];
// console.log(seconds);
// console.log(fourth);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
console.log(total);