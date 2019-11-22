import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  state = {
    count: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
      }),
    ).isRequired,
  };

  onIncrement = () => {
    this.setState(prevState => {
      if (prevState.count < this.props.items.length) {
        return {
          count: prevState.count + 1,
        };
      }
    });
  };

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {
          count: prevState.count - 1,
        };
      }
    });
  };

  render() {
    const { count } = this.state;
    const { items } = this.props;
    const max = items.length;
    const notActiveNext = count === items.length - 1;
    const notActivePrev = count === 0;

    return (
      <div className="s.reader">
        <Controls
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          notActiveNext={notActiveNext}
          notActivePrev={notActivePrev}
        />
        <Counter count={count + 1} max={max} />
        <Publication
          count={count + 1}
          title={items[count].title}
          text={items[count].text}
        />
      </div>
    );
  }
}
