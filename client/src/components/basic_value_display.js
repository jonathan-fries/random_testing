import react from 'react';
import Item from './basic_value_item';

export default class BasicValueDisplay extends React.Component {

render() {
  return (
    <div>
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}
