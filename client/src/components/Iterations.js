import React from 'react';
import './input.scss';

export default class Iteations extends React.Component {

    render() {
        return <input
                className='roundedCorner inputPadding'
                id="iterations"
                type="text"
                placeholder="# of iterations"/>;
                {/* onBlur={this.handleNumFunctionChange} */}

    }

}
