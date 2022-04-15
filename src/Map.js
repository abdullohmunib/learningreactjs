// gunakan rafce
// fungsi mirip looping di php / foreach di java scrip. ada ada yang baru menggunakan maps
// Filter mirip seperti percabangan if
import React from 'react'

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    },
    {
        nama: 'Sate',
        harga: 17000
    },
]

// Reduce
// const total_harga = makanans.reduce((total_harga, makanan) => {
//     return total_harga+makanan.harga;
// }, 0);

// Reduce 1 baris
const total_harga = makanans.reduce((total_harga, makanan) => total_harga+makanan.harga, 0);

const Map = () => {
  return (
    <div>
        <h2>Perulangan diatas || Maps Sederhana</h2>
        <ul>
            {makanans.map((makanan, no) => (
                 <li>{no+1}.{makanan.nama} - Harga {makanan.harga}</li>
            ))}
        </ul>

        {/* =============== */}
        <h2>Filter harga lebih dari 15000</h2>
        <ul>
            {makanans
            .filter((makanan) => makanan.harga > 12000)
            .map((makanan, no) => (
                 <li>{no+1}.{makanan.nama} - Harga {makanan.harga}</li>
            ))}
        </ul>
        {/* ================ */}
        <h2>Reduce | Menghitung total</h2>
        <p>Total Harga : <b>{total_harga}</b></p>
    </div>
  )
}

export default Map