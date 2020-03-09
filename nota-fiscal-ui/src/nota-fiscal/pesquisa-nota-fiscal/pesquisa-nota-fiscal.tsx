import React, {Component} from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";

export default class PesquisaNotaFiscal extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    actionTemplate(props: any, rowData: any) {
        return <div>
            <Button type="button"
                    icon="pi pi-pencil"
                    className="p-button-primary"
                    style={{marginRight: '.5em'}}
                    onClick={() => props.onEditar(rowData)}
            />

            <Button type="button"
                    icon="pi pi-times"
                    className="p-button-danger"
                    onClick={() => props.onExcluir(rowData['id'])}
            />
        </div>;
    }

    render() {
        return (
            <DataTable header="Lista Nota Fiscal"
                       value={this.props.listaNotaFiscal}>
                <Column header="Empresa" field="empresa"/>
                <Column header="Valor bruto" field="valorBruto"/>
                <Column header="Imposto" field="imposto"/>

                <Column header="Ações" body={(rowData: any) => this.actionTemplate(this.props, rowData)} style={{textAlign: 'center', width: '8em'}}/>
            </DataTable>
        )
    }
}
