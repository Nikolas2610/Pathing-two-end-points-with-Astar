const submit = document.getElementById('submit');
const resetBtn = document.getElementById('resetButton');
const form = document.getElementById('form');
const game = document.getElementById('game');
const startDefault = document.getElementById('startDefault');
// Set Min and Mav values
const minN = 4;
const maxN = 100;
const minP = 0;
const maxP = 1;
let startGame = false;

startDefault.addEventListener('click', (e) => {
    // No reload page
    e.preventDefault();
    // Start Game
    form.classList.add('d-none');   //Hide Form
    game.classList.remove('d-none');    //Show canvas
    // stopGame();
    startGame = true;
    // Add default values
    document.getElementById('nValue').innerHTML = 80;
    document.getElementById('sNodeValueX').innerHTML = 0;
    document.getElementById('sNodeValueY').innerHTML = 0;
    document.getElementById('g1NodeValueX').innerHTML = 25;
    document.getElementById('g1NodeValueY').innerHTML = 25;
    document.getElementById('g2NodeValueX').innerHTML = 78;
    document.getElementById('g2NodeValueY').innerHTML = 64;
    document.getElementById('obstaclesValue').innerHTML = 0.3;
    document.getElementById('declareColors').classList.remove('d-none');
    // Start algorithm 
    resetGame(80, 0, 0, 25, 25, 78, 64, 0.3);
})


submit.addEventListener('click', function (e) {
    // No reload page
    e.preventDefault();
    let validation = true;
    // Get the values from the user
    const formN = parseInt(document.getElementById('N').value);
    const startNodeX = parseInt(document.getElementById('startNodeX').value);
    const startNodeY = parseInt(document.getElementById('startNodeY').value);
    const G1NodeX = parseInt(document.getElementById('G1NodeX').value);
    const G1NodeY = parseInt(document.getElementById('G1NodeY').value);
    const G2NodeX = parseInt(document.getElementById('G2NodeX').value);
    const G2NodeY = parseInt(document.getElementById('G2NodeY').value);
    let userFrameRate = parseInt(document.getElementById('userFrameRate').value);
    const possibility = parseFloat(document.getElementById('possibility').value);

    // Validate the values
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
    if (!(!isNaN(startNodeY) && biggerFrom(startNodeY, formN-1) && smallerFrom(startNodeY, 0))) {
        validation = false;
        document.getElementById('startNodeY').classList.add('is-invalid');
        console.log("3")
    } else {
        document.getElementById('startNodeY').classList.remove('is-invalid');
        document.getElementById('startNodeY').classList.add('is-valid');
    }
    if (!(!isNaN(G1NodeX) && biggerFrom(G1NodeX, formN-1) && smallerFrom(G1NodeX, 0))) {
        validation = false;
        document.getElementById('G1NodeX').classList.add('is-invalid');
        console.log("4")
    } else {
        document.getElementById('G1NodeX').classList.remove('is-invalid');
        document.getElementById('G1NodeX').classList.add('is-valid');
    }
    if (!(!isNaN(G1NodeY) && biggerFrom(G1NodeY, formN-1) && smallerFrom(G1NodeY, 0))) {
        validation = false;
        document.getElementById('G1NodeY').classList.add('is-invalid');
        console.log("5")
    } else {
        document.getElementById('G1NodeY').classList.remove('is-invalid');
        document.getElementById('G1NodeY').classList.add('is-valid');
    }
    if (!(!isNaN(G2NodeX) && biggerFrom(G2NodeX, formN-1) && smallerFrom(G2NodeX, 0))) {
        validation = false;
        document.getElementById('G2NodeX').classList.add('is-invalid');
        console.log("5")
    } else {
        document.getElementById('G2NodeX').classList.remove('is-invalid');
        document.getElementById('G2NodeX').classList.add('is-valid');
    }
    if (!(!isNaN(G2NodeY) && biggerFrom(G2NodeY, formN-1) && smallerFrom(G2NodeY, 0))) {
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
        userFrameRate = 144;
    } else {
        document.getElementById('userFrameRate').classList.remove('is-invalid');
        document.getElementById('userFrameRate').classList.add('is-valid');
    }
    if (validation) {
        form.classList.add('d-none');   // Hide Form
        game.classList.remove('d-none');    // Show Canvas
        document.getElementById('declareColors').classList.remove('d-none');
        startGame = true;
        // Show the values to the user
        document.getElementById('nValue').innerHTML = formN;
        document.getElementById('sNodeValueX').innerHTML = startNodeX;
        document.getElementById('sNodeValueY').innerHTML = startNodeY;
        document.getElementById('g1NodeValueX').innerHTML = G1NodeX;
        document.getElementById('g1NodeValueY').innerHTML = G1NodeY;
        document.getElementById('g2NodeValueX').innerHTML = G2NodeX;
        document.getElementById('g2NodeValueY').innerHTML = G2NodeY;
        document.getElementById('obstaclesValue').innerHTML = possibility;
        // Start algorithm 
        resetGame(formN, startNodeX, startNodeY, G1NodeX, G1NodeY, G2NodeX, G2NodeY, possibility, userFrameRate);
    } else {
        console.log("Wrong Details")
    }
})
// Reset the algorithm
resetBtn.addEventListener('click', () => {
    location.reload();
})
// Validation function for bigger numbers
function biggerFrom(inputNumber, number) {
    if (inputNumber > number) {
        return false;
    } else {
        return true;
    }
}
// Validation function for smaller numbers
function smallerFrom(inputNumber, number) {
    if (inputNumber < number) {
        return false;
    } else {
        return true;
    }
}