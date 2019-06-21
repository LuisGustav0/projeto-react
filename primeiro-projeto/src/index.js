import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeiroComponent from './components/primeiro-component';
// import ComponentA, { ComponentB as CompB } from './components/two-components';
// import MultElements from './components/mult-elements';
// import FamilySiqueira from './components/family/family-siqueira';
// import Family from './components/family/family';
// import Person from './components/family/person';
// import ComponentWithFunction from './components/component-with-function';
// import Pai from './components/pai';
// import ComponentClass from './components/component-class';
// import Counter from './components/counter';
import Hook from './components/hook';

const element = document.getElementById('root');
ReactDOM.render(
  <div>
    <Hook />

    {/* <Counter /> */}

    {/* <ComponentClass value="" /> */}

    {/* <Pai /> */}

    {/* <ComponentWithFunction /> */}

    {/* <Family
        lastName="Siqueira">
      <Person name="Luis" />
      <Person name="Thais" />
    </Family> */}

    {/* <FamilySiqueira /> */}

    {/* <MultElements /> */}

    {/* <ComponentA
        value="Olá eu sou o A!"
    />

    <CompB
        value="B na área!" 
    /> */}


    {/* <PrimeiroComponent
        value="Primeiro component!"
        isOk="true"
    /> */}
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