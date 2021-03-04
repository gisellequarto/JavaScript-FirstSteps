import React from 'react'

import { childrenWithProps } from '../utils/utils'

/* acabar com o warning do esLint */
const pai = props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>

export default pai;