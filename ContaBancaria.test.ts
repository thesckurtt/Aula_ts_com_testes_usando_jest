import { DEPOSITO_INVALIDO, SALDO_INSUFICIENTE } from "./constantes";
import { ContaBancaria } from "./ContaBancaria"
describe("Quando depositar", ()=>{
    test("Deve ser possível realizar deposito", () => {

        // Cenário
        const conta: ContaBancaria = new ContaBancaria();
        
        // Execução
        conta.depositar(100);
        
        // Validação
        expect(conta.getSaldo()).toBe(100);
    });
    
    test("Não deve ser possível depositar um valor negaivo", () => {
        // Cenario
        const conta: ContaBancaria = new ContaBancaria();
    
        // Ação e VAlidação
        expect(() => conta.depositar(-100)).toThrow(DEPOSITO_INVALIDO)
    
    })
})

describe("Quando sacar", ()=>{
    it("Deve subtrair o valor do do saque do saldo",() => {
        const conta = new ContaBancaria();
        conta.depositar(1000);

        conta.sacar(200);

        expect(conta.getSaldo()).toBe(800)
    })

    it("Não deve ser possível sacar um valor maior do que o saldo", () => {
        const conta = new ContaBancaria();
        conta.depositar(1000);

        expect(() => conta.sacar(2000)).toThrow(SALDO_INSUFICIENTE)
        
    })
})
