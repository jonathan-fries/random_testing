import './appcontainer.scss';
import React from 'react';
import Footer from './components/footer';
import InputMin from './components/input_min';
import InputMax from './components/input_max';

export default class AppContainer extends React.Component {

    render() {
        return <div className='contentBox'>
                <h1>Testing Randomness</h1>
                <InputMin/><InputMax/>
                <Footer/>
                </div>;
                {/* } <Footer/> */}
    }
}
