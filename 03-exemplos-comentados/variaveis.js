// Uso apenas de variáveis e saída de informações.
// Exemplo: Fazer cálculos (Bhaskara) em etapas.

// Equação: 5x² + 4x + 3 = 0

// Coeficientes
let a = 5;
let b = 4;
let c = 3;

// ** é o operador de potenciação
let delta = b ** 2 - 4 * a * c;

// delta ** 0.5 significa delta elevado a meio,
// ou seja, raiz quadrada de delta.
let sqrt_delta = delta ** 0.5;
let x1 = -b + sqrt_delta;
let x2 = -b - sqrt_delta;

console.log('x1:', x1);
console.log('x2:', x2);
