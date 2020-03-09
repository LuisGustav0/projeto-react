import React, {Component} from "react";
import CadastroNotaFiscal from "./cadastro-nota-fiscal/cadastro-nota-fiscal";
import PesquisaNotaFiscal from "./pesquisa-nota-fiscal/pesquisa-nota-fiscal";
import NotaFiscal from "./nota-fiscal.model";
import HttpClientService from "../arquitetura/service/http-client.service";

const http = new HttpClientService();

export default class CrudNotaFiscal extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            notaFiscal: new NotaFiscal(),
            listaNotaFiscal: ([] as NotaFiscal[])
        };
    }

    onPesquisarNotaFiscal = () => {
        http.get('nota-fiscal')
            .then((listaNotaFiscal: NotaFiscal[]) => this.setState({listaNotaFiscal}));
    }

    componentDidMount(): void {
        this.onPesquisarNotaFiscal();
    }

    onLimparNotaFiscal = () => {
        this.setState({
            notaFiscal: new NotaFiscal()
        });
    }

    onHandleChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
        const {notaFiscal} = this.state;
        const {name, value} = $event.target;

        notaFiscal[name] = value;

        this.setState({
            notaFiscal
        });
    }

    onSalvar = () => {
        let {notaFiscal} = this.state;

        http.post('nota-fiscal', notaFiscal)
            .then(() => {
                this.onLimparNotaFiscal();
                this.onPesquisarNotaFiscal();
            });
    }

    onEditar = (notaFiscal: any) => {
        this.setState({
            notaFiscal
        });
    }

    onExcluir = (id: number) => {
        http.delete('nota-fiscal', id)
            .then(() => {
                this.onLimparNotaFiscal();
                this.onPesquisarNotaFiscal();
            });
    }

    render() {
        return (
            <div>
                <CadastroNotaFiscal
                    notaFiscal={this.state.notaFiscal}
                    onHandleChange={this.onHandleChange}
                    onSalvar={this.onSalvar}
                />

                <PesquisaNotaFiscal
                    listaNotaFiscal={this.state.listaNotaFiscal}
                    onEditar={this.onEditar}
                    onExcluir={this.onExcluir}
                />
            </div>
        )
    }
}
