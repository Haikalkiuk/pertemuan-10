const tambah = (a, b) => {
    console.log(a+b);
}

const kurang = (a, b) => {
    console.log(a-b);
}

const calculator = (a, b, operator) => {
    return operator(a, b);
}

/*calculator (10, 5, kurang)
**/
const berenang = () => {
    console.log("berenang selesai");
}

const bersepeda= () => {
    console.log("bersepeda selesai");
}

const berlari = () => {
    console.log("berlari selesai");
}

const traithlon = () => {
    setTimeout(() => {
        berenang();

    setTimeout(() => {
            bersepeda();
    setTimeout(() => {
                berlari();
    },4000)
},2000)
},6000)
}

traithlon()