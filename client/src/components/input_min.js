import React from 'react';
import './input.scss';

export default class InputMin extends React.Component {

    render() {
        return <input
                className='roundedCorner inputPadding'
                id="minValue"
                type="text"
                placeholder="min value" />;
                {/* onBlur={this.handleNumFunctionChange} */}

    }

}
