import React from 'react';
import ReactDOM from 'react-dom';

//componentes personalizados precisam SEMPRE ter letra maiuscula
//import Primeiro from './componentes/primeiro'
//import BomDia from './componentes/bomDia'
//import { BoaTarde, BoaNoite } from './componentes/multiplos'

import Multi from './componentes/multiplos'

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana" />
        <Multi.BoaNoite nome="Bia" />
    </div>
    , document.getElementById('root'));

