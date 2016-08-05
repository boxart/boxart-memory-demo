import React, {Component} from 'react';
import CardCenter from './card-center';

export default class CardCenter8 extends Component {
  getWires() {
    return Object.assign({}, this.card && this.card.getWires());
  }

  render() {
    return <CardCenter ref={card => {this.card = card;}} rooster={8} />;
  }
}

CardCenter8.previewArmature = true;
