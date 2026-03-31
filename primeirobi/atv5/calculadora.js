const valorConta = 100;
const percentGorjeta = 15;

const valorGorjeta = valorConta * (percentGorjeta / 100);

const valorTotal = valorConta + valorGorjeta;

console.log(
    `Valor da conta: R$${valorConta.toFixed(2)}, ` +
    `Gorjeta (${percentGorjeta}%): R$${valorGorjeta.toFixed(2)}, ` +
    `Total a pagar: R$${valorTotal.toFixed(2)}`
);