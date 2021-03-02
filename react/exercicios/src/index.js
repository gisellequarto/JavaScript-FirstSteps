import React from 'react';
import ReactDOM from 'react-dom';

//componentes personalizados precisam SEMPRE ter letra maiuscula
//import Primeiro from './componentes/primeiro'
import BomDia from './componentes/bomDia'

ReactDOM.render(<BomDia nome="Maria" idade={3}/>,  document.getElementById('root'));

