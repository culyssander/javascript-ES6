// Primeiro teste simples
// class Math {
//     sum(a, b) {
//         return a + b;
//     }
// }

// Usado callback
class Math {
    sum(a, b, callback) {
        setTimeout(( ) => {
            callback(a + b);
        }, 2500);
    }

    mult(a, b, callback) {
        setTimeout(() => {
            callback(a * b);
        });
    }
}

module.exports = Math;