const submit = document.getElementById('submit');
const resetBtn = document.getElementById('resetButton');
const form = document.getElementById('form');
const game = document.getElementById('game');
const startDefault = document.getElementById('startDefault');

const minN = 4;
const maxN = 80;
const minP = 0;
const maxP = 1;
let startGame = false;

startDefault.addEventListener('click', (e) => {
    // No reload page
    e.preventDefault();
    // Start Game
    form.classList.add('d-none');
    game.classList.remove('d-none');
    stopGame()
    startGame = true;
    resetGame(80, 0, 0, 25, 25, 78, 64, 0.3);
})


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
    const userFrameRate = parseInt(document.getElementById('userFrameRate').value);
    const possibility = parseFloat(document.getElementById('possibility').value);

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
    if (!(!isNaN(userFrameRate) && biggerFrom(userFrameRate, 140) && smallerFrom(userFrameRate, 0))) {
        validation = false;
        document.getElementById('userFrameRate').classList.add('is-invalid');
    } else {
        document.getElementById('userFrameRate').classList.remove('is-invalid');
        document.getElementById('userFrameRate').classList.add('is-valid');
    }
    if (validation) {
        form.classList.add('d-none');
        game.classList.remove('d-none');
        stopGame()
        startGame = true;
        console.log("HERE: " + userFrameRate)
        resetGame(formN, startNodeX, startNodeY, G1NodeX, G1NodeY, G2NodeX, G2NodeY, possibility, userFrameRate);
    } else {
        console.log("Fail")
    }
})

resetBtn.addEventListener('click', () => {
    location.reload();
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