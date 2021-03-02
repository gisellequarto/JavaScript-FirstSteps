import React from 'react';
import ReactDOM from 'react-dom';

//componentes personalizados precisam SEMPRE ter letra maiuscula
//import Primeiro from './componentes/primeiro'
//import BomDia from './componentes/bomDia'
//import { BoaTarde, BoaNoite } from './componentes/multiplos'
//import Multi from './componentes/multiplos'

import Saudação from './componentes/saudação';

ReactDOM.render(
    <div>
        <Saudação tipo="Bom dia" nome="Sol"/>
    </div>
    , document.getElementById('root'));

