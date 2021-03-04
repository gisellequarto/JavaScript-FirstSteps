import React from 'react';
import ReactDOM from 'react-dom';

//componentes personalizados precisam SEMPRE ter letra maiuscula
//import Primeiro from './componentes/primeiro'
//import BomDia from './componentes/bomDia'
//import { BoaTarde, BoaNoite } from './componentes/multiplos'
//import Multi from './componentes/multiplos'
//import Saudação from './componentes/saudação';

import Pai from './componentes/pai';

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" />
    </div>
    , document.getElementById('root'));

