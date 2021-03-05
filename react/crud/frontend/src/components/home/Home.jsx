import React from 'react';
import Main from '../template/Main';

const home = props => {
    return  <Main icon="home" title="Início" subtitle="Projeto de React <CRUD>">
                <div className="display-4">Bem Vindo!</div>
                <hr/>
                <p className="mb-0">Cadastro desenvolvido em REACT!</p>
            </Main>
}

export default home;