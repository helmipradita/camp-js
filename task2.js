const printGenapGajil = (number) => {
    for(let i = 1; i <= number; i++){
        if(i%2==0){
            console.log(`${i} merupakan bilangan genap`);
        } else {
            console.log(`${i} merupakan bilangan ganjil`);
        }
    }
}
printGenapGajil(5);