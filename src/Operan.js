// bebas boleh pake rcc
import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    return (
      <div>
          <h2>Operan State yang menjadi Props : {this.props.makanan}</h2>
          <button onClick={() => this.prop.gantiMakanan("Soto")}>Ganti Makanan</button>
      </div>
    )
  }
}
