
const placeholder = '\t'
const separator = '\t';
const ceil = Math.ceil;
const floor = Math.floor;
const sqrt = Math.sqrt;
const isD2 = n => n % 2 == 0;
const makeD2Array = len => {
    let d2Array = [];
    for (let i = 0; i < len; i += 1) {
        let inner = [];
        for (let j = 0; j < len; j += 1) { inner.push(placeholder); }
        d2Array.push(inner);
    }
    return d2Array;
}
const printD2Array = d2Array => {
    for (let inner of d2Array) {
        console.log(...inner);
    }
}

function spiral(n) {
    let len = ceil(sqrt(n));
    len = isD2(len) ? len + 1 : len;
    let d2Array = makeD2Array(len);
    //坐标，计数，方向(0123代表上下左右)
    let i, j, c, d;
    i = floor(len / 2);
    j = i;
    c = 1;
    d2Array[i][j++] = separator + c++;
    d2Array[i][j] = separator + c;
    d = 0;
    while (c !== n) {
        switch (d) {
            case 0://上
                if (d2Array[i][j - 1] !== placeholder) {
                    i -= 1;
                } else {
                    d = 2;
                    j -= 1;
                }
                d2Array[i][j] = separator + (++c);
                break;
            case 1://下
                if (d2Array[i][j + 1] !== placeholder) {
                    i += 1;
                } else {
                    d = 3;
                    j += 1
                }
                d2Array[i][j] = separator + (++c);
                break;
            case 2://左
                if (d2Array[i + 1][j] !== placeholder) {
                    j -= 1;
                } else {
                    d = 1;
                    i += 1
                }
                d2Array[i][j] = separator + (++c);
                break;
            case 3://右
                if (d2Array[i - 1][j] !== placeholder) {
                    j += 1;
                } else {
                    d = 0;
                    i -= 1;
                }
                d2Array[i][j] = separator + (++c);
                break;
        }
    }
    printD2Array(d2Array);
}

let n = 9;
if (process.argv[2]) {
    n = parseInt(process.argv[2]);
}
spiral(n);