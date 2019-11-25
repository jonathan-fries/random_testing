import React from 'react';
import './input.scss';

export default class InputMax extends React.Component {

    render() {
        return <input
                className='roundedCorner inputPadding'
                id="maxValue"
                type="text"
                placeholder="max value"/>;
                {/* onBlur={this.handleNumFunctionChange} */}

    }

}
