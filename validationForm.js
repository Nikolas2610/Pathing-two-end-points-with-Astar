const submit = document.getElementById('submit');
const minN = 4;
const maxN = 50;
const minP = 0;
const maxP = 1;
console.log("hi")

submit.addEventListener('click', function (e) {
    // No reload page
    e.preventDefault();
    let validation = true;
    const formN = parseInt(document.getElementById('N').value);
    const startNodeX = parseInt(document.getElementById('startNodeX').value);
    const startNodeY = parseInt(document.getElementById('startNodeY').value);
    const G1NodeX = parseInt(document.getElementById('G1NodeX').value);
    const G1NodeY = parseInt(document.getElementById('G1NodeY').value);
    const G2NodeX = parseInt(document.getElementById('G2NodeX').value);
    const G2NodeY = parseInt(document.getElementById('G2NodeY').value);
    const possibility = parseInt(document.getElementById('possibility').value);

    console.log(formN)
    if (!(!isNaN(formN) && biggerFrom(formN, maxN) && smallerFrom(formN, minN))) {
        validation = false;
        document.getElementById('N').classList.add('is-invalid');
        console.log("1")
    } else {
        document.getElementById('N').classList.remove('is-invalid');
        document.getElementById('N').classList.add('is-valid');
    }
    if (!(!isNaN(startNodeX) && biggerFrom(startNodeX, formN) && smallerFrom(startNodeX, 0))) {
        validation = false;
        document.getElementById('startNodeX').classList.add('is-invalid');
        console.log("2")
    } else {
        document.getElementById('startNodeX').classList.remove('is-invalid');
        document.getElementById('startNodeX').classList.add('is-valid');
    }
    if (!(!isNaN(startNodeY) && biggerFrom(startNodeY, formN) && smallerFrom(startNodeY, 0))) {
        validation = false;
        document.getElementById('startNodeY').classList.add('is-invalid');
        console.log("3")
    } else {
        document.getElementById('startNodeY').classList.remove('is-invalid');
        document.getElementById('startNodeY').classList.add('is-valid');
    }
    if (!(!isNaN(G1NodeX) && biggerFrom(G1NodeX, formN) && smallerFrom(G1NodeX, 0))) {
        validation = false;
        document.getElementById('G1NodeX').classList.add('is-invalid');
        console.log("4")
    } else {
        document.getElementById('G1NodeX').classList.remove('is-invalid');
        document.getElementById('G1NodeX').classList.add('is-valid');
    }
    if (!(!isNaN(G1NodeY) && biggerFrom(G1NodeY, formN) && smallerFrom(G1NodeY, 0))) {
        validation = false;
        document.getElementById('G1NodeY').classList.add('is-invalid');
        console.log("5")
    } else {
        document.getElementById('G1NodeY').classList.remove('is-invalid');
        document.getElementById('G1NodeY').classList.add('is-valid');
    }
    if (!(!isNaN(G2NodeX) && biggerFrom(G2NodeX, formN) && smallerFrom(G2NodeX, 0))) {
        validation = false;
        document.getElementById('G2NodeX').classList.add('is-invalid');
        console.log("5")
    } else {
        document.getElementById('G2NodeX').classList.remove('is-invalid');
        document.getElementById('G2NodeX').classList.add('is-valid');
    }
    if (!(!isNaN(G2NodeY) && biggerFrom(G2NodeY, formN) && smallerFrom(G2NodeY, 0))) {
        validation = false;
        document.getElementById('G2NodeY').classList.add('is-invalid');
        console.log("6")
    } else {
        document.getElementById('G2NodeY').classList.remove('is-invalid');
        document.getElementById('G2NodeY').classList.add('is-valid');
    }
    if (!(!isNaN(possibility) && biggerFrom(possibility, maxP) && smallerFrom(possibility, minP))) {
        validation = false;
        document.getElementById('possibility').classList.add('is-invalid');
        console.log("7")
    } else {
        document.getElementById('possibility').classList.remove('is-invalid');
        document.getElementById('possibility').classList.add('is-valid');
    }
    if (validation) {
        console.log("Correct")
    } else {
        console.log("Fail")
    }
})

function biggerFrom(inputNumber, number) {
    if (inputNumber > number) {
        return false;
    } else {
        return true;
    }
}

function smallerFrom(inputNumber, number) {
    if (inputNumber < number) {
        return false;
    } else {
        return true;
    }
}