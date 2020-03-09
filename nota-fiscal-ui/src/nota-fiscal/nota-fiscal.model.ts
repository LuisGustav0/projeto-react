export default class NotaFiscal {

    private empresa: string | undefined;
    private valorBruto: number | undefined;
    private imposto: number | undefined;

    constructor(empresa?: string,
                valorBruto?: number,
                imposto?: number) {
        this.empresa = empresa;
        this.valorBruto = valorBruto;
        this.imposto = imposto;
    }
}
