import './Main.css';
import React from 'react';
import Header from './Header';

const main = props => {
    return <React.Fragment>
                <Header />
                <main className="content">
                    Conteúdo
                </main>
            </React.Fragment>
}

export default main;