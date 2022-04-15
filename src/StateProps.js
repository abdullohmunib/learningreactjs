// prop only read, state changes can be asynchronous using this.setState
// hanya bisa dibuat dengan class compomen / rcc

import React, { Component } from "react";
import Operan from "./Operan";


export default class StateProps extends Component {
    // construktor adalah codingan yang pertama kali dijalankan [01]
    constructor(props) {
        super(props);
        this.state = {
            makanan: 'Bakso'
        }
    }
    // State dipisah [04] || gunakan arrow Function
    gantiMakanan = (makanan_baru) =>{
        this.setState({
            makanan : makanan_baru
        })
    }

    render() {
        
        return (
            <div>
                {/* panggil state dari construktor disini [02] */}
                {this.state.makanan}
                {/* bisa menuliskan onClick seperti di bawah atau dengan cara lain [03] */}
                {/* <button onClick={() => this.setState({makanan : 'Soto'})}>Ganti Makanan</button> */}

                {/* cara lain buat state [04] */}
                <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
                {/* Merubah makanan menjadi props [05], sebelumnya buat dlu file Operan.js */}
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
