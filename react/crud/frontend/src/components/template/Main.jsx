import './Main.css';
import React from 'react';
import Header from './Header';

const main = props => {
    return <React.Fragment>
                <Header {...props}/>
                <main className="content">
                    Conteúdo
                </main>
            </React.Fragment>
}

export default main;