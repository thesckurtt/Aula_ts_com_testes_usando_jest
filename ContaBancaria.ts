import { DEPOSITO_INVALIDO, SALDO_INSUFICIENTE } from "./constantes";

export class ContaBancaria{
    private _saldo: number;
    
    constructor(){
        this._saldo = 0;
    }
    
    depositar(valor: number) {
        if(valor <= 0){
            throw new Error(DEPOSITO_INVALIDO);
        }
        this._saldo += valor;
    }
    
    sacar(valor: number) {
        const isInvalidbalance = valor > this._saldo
        if(isInvalidbalance){
            throw new Error(SALDO_INSUFICIENTE);
        }
        this._saldo -= valor;
    }

    getSaldo(){
        return this._saldo;
    }
}