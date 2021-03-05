import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: <CRUD>'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Texto teste
               {/*  {this.renderForm()}
                {this.renderTable()} */}
            </Main>
        )
    }
}