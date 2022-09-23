// // filter() digunakan untuk mencari elemen di dalam array sesuai kriteria tertentu.
let number = [1, 3, 2, 4, 7, 5, 6, 8];
let ganjilGenap = number.filter(num => num % 2 == 0 ? true : false);
console.log(ganjilGenap);

// push() digunakan untuk menambahkan satu atau lebih elemen ke akhir sebuah array.
let makanan = ["Nasi Pecel", "Nasi Goreng", "Soto Ayam"];
let tambah = makanan.push("Bakso");
console.log(makanan);

// pop() digunakan untuk menghapus elemen terakhir dari array, pop tidak menerima parameter.
let minuman = ["Es Teh", "Es Jeruk", "Air Putih"];
let hapus = minuman.pop();
console.log(minuman);

// reduce() digunakan untuk mengeksekusi fungsi callback pada setiap elemen array, hasil kalkulasi elemen sebelumnya digunakan untuk kalkulasi elemen berikutnya.
let angka = [1, 2, 3, 4, 5];
let result = angka.reduce((nilaiSebelumnya, nilaiSekarang) => {
    return nilaiSebelumnya + nilaiSekarang;
});
console.log(result);