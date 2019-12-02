import './appcontainer.scss';
import React from 'react';
import Footer from './components/footer';
import RandomMain from './components/random_main';

export default class AppContainer extends React.Component {

    render() {
        return <div className='contentBox'>
                <h1>Testing Randomness</h1>
                <RandomMain />
                <Footer/>
                </div>;
    }
}
