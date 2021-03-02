/* usado em 90% dos casos */
export default props =>
<div>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Feliz {props.idade} anos!</h2>
    </div>

//import React from 'react'

/* se usar uma div não precisa importar o React,
mas se usar o React.Fragment, precisa importar */
/* export default props =>
    <React.Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Feliz {props.idade} anos!</h2>
    </React.Fragment> */


/* precisa usar uma prop key para cada elemento do array */
/* export default props => [
    <h1 key='h1'>Bom dia, {props.nome}!</h1>,
    <h2 key='h2'>Feliz {props.idade} anos!</h2>
] */