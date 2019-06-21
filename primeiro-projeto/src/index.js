import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeiroComponent from './components/primeiro-component';
// import ComponentA, { ComponentB as CompB } from './components/two-components';
// import MultElements from './components/mult-elements';
// import FamilySiqueira from './components/family/family-siqueira';
import Family from './components/family/family';
import Person from './components/family/person';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    {/* <PrimeiroComponent
            value="Primeiro component!"
            isOk="true"
        /> */}

    {/* <ComponentA
            value="Olá eu sou o A!"
        />

        <CompB
            value="B na área!" 
        /> */}

    {/* <MultElements /> */}

    {/* <FamilySiqueira /> */}

    <Family
        lastName="Siqueira">
      <Person name="Luis" />
      <Person name="Thais" />
    </Family>
  </div>
, element);


// const elementOlaMundo = document.getElementById('elementOlaMundo');

// ReactDOM.render(
//     <h1> Ola Mundo </h1>
//     , elementOlaMundo);

// const elementList = document.getElementById('ul');
// let item = document.createElement('li');
// let texto = document.createTextNode('1) Luis');

// item.appendChild(texto);
// elementList.appendChild(item);

// item.appendChild(texto2);
// elementList.appendChild(item);

// ReactDOM.render(elementList);