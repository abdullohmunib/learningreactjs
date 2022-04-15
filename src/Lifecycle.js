import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle'


export default class Lifecycle extends Component {
    //   membuat construktor cepat rcon
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'Bakso',
            data: {},
            tampilHalamanSub: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value,
        })
    }

    render() {
        // console.log("data : ", this.state.data);
        return (
            <div>
                {/* <h2> {this.state.data.title} </h2> */}
                <h2>{this.state.makanan}</h2>

                {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
                {/* button harus pakai arrow function */}
                {/* fungsi ini agar button dapat merubah true dan false pada fungsi halaman sub */}
                <button onClick={() => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampilkan Halaman Sub</button>
            </div>
        )
    }
}
