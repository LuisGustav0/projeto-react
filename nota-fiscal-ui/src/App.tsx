import React from 'react';
import './App.css';
import './assests/css/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from "./navbar/header/header";
import {Card, CardContent} from "@material-ui/core";
import CrudNotaFiscal from "./nota-fiscal/crud-nota-fiscal";

function App() {
    return (
        <div>
            <Header/>

            <Card style={{marginTop: 20, marginRight: 20, marginLeft: 20}}>
                <CardContent>
                    <div style={{marginTop: '20px'}}>
                        <CrudNotaFiscal/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
