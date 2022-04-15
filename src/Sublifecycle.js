import React, { Component } from 'react'

export default class Sublifecycle extends Component {
  
    // ketika sub di copot maka akan menampilkan jadi sate
  componentWillUnmount(){
      this.props.ubahMakanan("Sate");
  }
    render() {
    return (
      <div>Componen Sublifecycle : </div>
    )
  }
}
