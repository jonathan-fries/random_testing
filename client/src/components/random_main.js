import React from 'react';
import InputForm from './input_form';
import {localRandom} from './shared/local_math_dot_random';
import {randomDotOrgRandom} from './shared/random_dot_org_random';

export default class RandomMain extends React.Component {

  constructor(props){
      super(props);
      this.handleButtonPress = this.handleButtonPress.bind(this);
    }

    handleButtonPress(key, evt, form){
      var randoms;
      var randomsDotOrg;

      var minimum = form.elements.minimum.value;
      var maximum = form.elements.maximum.value;
      var iterations = form.elements.iterations.value;
      var delay = form.elements.delay.value;
      randoms = localRandom(minimum, maximum, iterations, delay);
      randomsDotOrg = randomDotOrgRandom(minimum, maximum, iterations);

    }

    render() {
      return (
        <InputForm OnButtonPress={this.handleButtonPress} />
      );
    }
  }
