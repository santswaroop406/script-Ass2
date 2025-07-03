function Grade(M) {
    if (M <= 10) {
        return "E"
    } else if (11 >= M && M <= 20) {
        return "D"
    } else if (21 >= M && M <= 30) {
        return "C"
    } else if (31 >= M && M <= 40) {
        return "B"
    } else {
        return "A"
    }
}
let grade = Grade(1);
console.log(grade);



function getValue(c) {
    if (c === 'P' || c === 'p') {
        return "PrepBytes";
    } else if (c === 'Z' || c === 'z') {
        return "Zenith";
    } else if (c === 'E' || c === 'e') {
        return "Expert Coder";
    } else if (c === 'D' || c === 'd') {
        return "Data Structure";
    } else {
        return "Invalid character";
    }
}
let char = 'e';
let result = getValue(char);
console.log(result);




function Max_out_of_three(A, B, C) {
    if (A === B && B === C) {
        return -1;
    } else {
        return Math.max(A, B, C);
    }
}

console.log(Max_out_of_three(2, 5, 4));



function findSndSmallest(X, Y, Z) {
    let arr = [X, Y, Z];
    arr.sort((a, b) => a - b);
    return arr[2];
}
console.log(findSndSmallest(2, 9, 23));




function Triangle_Check(A, B, C) {
    if (A + B + C !== 180) {
        return "invalid";
    }

    if (A > 90 || B > 90 || C > 90) {
        return "obtuse";
    } else {
        return "acute";
    }
}
console.log(Triangle_Check(60, 100, 20));