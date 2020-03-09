import React, {Component} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "@material-ui/core";
import Col from "react-bootstrap/Col";
import {default as NumberFormat} from 'react-number-format';

export default class CadastroNotaFiscal extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="p-grid">
                    <div className="p-col-12">
                        <h4>Cadastro Nota Fiscal</h4>
                    </div>
                </div>

                <Form>
                    <Form.Group>
                        <Form.Label column>
                            Codigo
                        </Form.Label>

                        <Col lg={3}>
                            <Form.Control
                                name="id"
                                disabled
                                defaultValue={this.props.notaFiscal.id}
                                onChange={this.props.onHandleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label column>
                            Empresa
                        </Form.Label>

                        <Col>
                            <Form.Control
                                name="empresa"
                                defaultValue={this.props.notaFiscal.empresa}
                                onChange={this.props.onHandleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label column>
                            Valor bruto
                        </Form.Label>

                        <Col lg="3">
                            <NumberFormat
                                name="valorBruto"
                                className="form-control"
                                allowedDecimalSeparators={[',', '.']}
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={2}
                                fixedDecimalScale={true}
                                value={this.props.notaFiscal.valorBruto}
                                defaultValue={this.props.notaFiscal.valorBruto}
                                onChange={this.props.onHandleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label column>
                            Imposto
                        </Form.Label>

                        <Col lg="3">
                            <NumberFormat
                                name="imposto"
                                className="form-control"
                                allowedDecimalSeparators={[',', '.']}
                                thousandSeparator="."
                                decimalSeparator=","
                                decimalScale={2}
                                fixedDecimalScale={true}
                                value={this.props.notaFiscal.imposto}
                                defaultValue={this.props.notaFiscal.imposto}
                                onChange={this.props.onHandleChange}
                            />
                        </Col>
                    </Form.Group>

                    <Col lg="3">
                        <Button variant="contained"
                                color="primary"
                                onClick={this.props.onSalvar}>
                            Submit
                        </Button>
                    </Col>
                </Form>
            </div>
        )
    }
}
