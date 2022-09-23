let data = {
    id: 1,
    name: "budi pratama",
    gender: "female",
    height: "165 cm",
    educational: 
    [
        {
            priode: "2013-2016",
            school: "Kalam kudu High School",
            major: "-"
        }
    
    ],
    phone: {
        primari : "0812312323",
        secondary: "0082342343"
    }
    
}

let newEducation = {
    priode: "2016-2020",
    school: "State University of Jakarta",
    major: "Accountancy"
}

// Task 3a
let result = {...data, name: "Helmi Pradita", phone: "085708572498", ...newEducation};
console.log(result);

// Task 3b
let phone = data.phone;
console.log(phone.primari, phone.secondary);

const {phone: {primari, secondary}} = data;
console.log(primari, secondary);

// Task 3c
const gabungan = {...data, ...newEducation}
console.log(gabungan);


