module.exports = function solveEquation(equation) {
    var arrayEquation = equation.split(" ");

    var a = +arrayEquation[0];
    var b = +arrayEquation[4];
    var c = +arrayEquation[8];
    var x1, x2, result = [];

    if(arrayEquation[3] == '-') {
        b = -b;
    }
    if(arrayEquation[7] == '-') {
        c = -c;
    }

    var d = Math.pow(b, 2) - 4*a*c;

    x1 = (-b+Math.sqrt(d))/(2*a);
    x2 = (-b-Math.sqrt(d))/(2*a);

    if(x1 < x2) {
        result.push(Math.round(x1));
        result.push(Math.round(x2));
    } else if(x1 > x2) {
        result.push(Math.round(x2));
        result.push(Math.round(x1));
    }

    return result;
}
