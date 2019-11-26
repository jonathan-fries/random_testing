import react from 'react';

export default class Item extends React.Component {

render() {
  return (
    <div>
      <span>Value {props.key} appeared {props.item} times.</span>
    </div>
  );
}
