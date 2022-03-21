export function romanToInteger(str) {
    let result = 0;
    let dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let keys = Object.keys(dict);
    for (let i = 0; i < str.length; i++) {
        if (keys.indexOf(str[i]) < keys.indexOf(str[i + 1])) {
            result -= dict[str[i]];
        } else {
            result += dict[str[i]];
        }
    }

    return result;
}
