function removeFromArray(array, element) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == element) {
            array.splice(i, 1);
        }
    }
}

function heuristic(a, b) {
    let d = abs(a.i - b.i) + abs(a.j - b.j)
    // let d = dist(a.i,a.j,b.i,b.j);
    return d;
}

function addWeight(current, neighbor) {
    if (neighbor.i - current.i == 0 && neighbor.j - current.j == 1) {
        return current.g + 0.5;
    }
    if (abs(neighbor.i - current.i) == 1 && neighbor.j - current.j == 0) {
        return current.g + 1;
    }
}

const N = 60;
let cols = N;
let rows = N;
let grid = new Array(cols);

let openSet = [];
let closeSet = [];
let start;
let end;
let w, h;
let path = [];
let current;
let possibility = 0.2;
let noSulotion = false;
let firstG = false;
let g1, g2, h1, h2;
let firstPath = [];
let test = false;

class Spot {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.find = false;
        this.neighbors = [];
        this.previous = undefined;
        this.wall = false;

        // if (random(1) < possibility) {
        //     this.wall = true;
        // }
        // if ((i == 1 && j == 1) || i == 2 && j == 2) {
        //     this.wall = true;
        // }
    }


    show(color) {
        fill(color);
        if (this.wall) {
            fill(0);
        }
        noStroke();
        rect(this.i * w, this.j * h, w - 1, h - 1)
    }

    addNeighbors(grid) {
        let i = this.i;
        let j = this.j;
        if (i < cols - 1) {
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0) {
            this.neighbors.push(grid[i - 1][j]);
        }
        if (j < rows - 1) {
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0) {
            this.neighbors.push(grid[i][j - 1]);
        }
    }
}

function createSpots() {
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].addNeighbors(grid);
        }
    }
}


function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('canvasContainer');

    w = width / cols;
    h = height / rows;

    createSpots();

    start = grid[1][0];
    g1 = grid[rows - 1][cols - 1];
    g2 = grid[cols - 1][0];

    start.wall = false;
    g1.wall = false;
    g2.wall = false;
    h1 = heuristic(start, g1);
    h2 = heuristic(start, g2);
    console.log(`h1: ${h1}, h2: ${h2}`)

    if (h1 == h2) {
        if (start.i - g1.i < start.i - g2.i) {
            console.log("G1")
            end = g1;
            end2 = g2;
        } else {
            console.log("G2")
            end = g2;
            end2 = g1;
        }
    } else if (h1 > h2) {
        console.log("G2")
        end = g2;
        end2 = g1;
    } else {
        console.log("G1")
        end = g1;
        end2 = g2;
    }



    openSet.push(start);
}

function draw() {
    frameRate(60);
    if (!firstG) {
        aStar(end);
    } else {
        aStar(end2);
    }
    printSpots();

}

function aStar(masterEnd) {
    if (openSet.length > 0) {
        //Continue
        let winner = 0;
        for (let i = 0; i < openSet.length; i++) {
            if (openSet[i].f < openSet[winner].f) {
                winner = i;
            }
        }
        current = openSet[winner];

        if (current == masterEnd) {
            console.log("Second G!");
            console.log("WEIGHT: " + masterEnd.g)
            masterEnd.find = true;
            if (!firstG) {
                firstG = true;
                // let temp = current;
                // firstPath.push(temp);
                // while (temp.previous) {
                //     firstPath.push(temp.previous);
                //     temp = temp.previous;
                // }

                // console.log(current);
                // console.log(start);

                // neighbor.previous = current;
                start = masterEnd;
                if (g1 === masterEnd) {
                    end = g2;
                    g1.find = true;
                } else {
                    end = g1;
                    g2.find = true;
                }
                openSet = [];
                // closeSet = [];
                // current = start;
                openSet.push(start);

            } else {
                console.log("DONE!");
                console.log(grid);
                noLoop();
            }
            
        }

        removeFromArray(openSet, current)

        closeSet.push(current);
        let neighbors = current.neighbors;
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            // neighbor.g = current.g + 1;

            if (!closeSet.includes(neighbor) && !neighbor.wall) {
                let tempG = addWeight(current, neighbor);
                // let tempG = current.g + 1;

                if (tempG < neighbor.g) {
                    neighbor.g = tempG;
                } else {
                    neighbor.g = tempG;
                    openSet.push(neighbor);
                }

                neighbor.h = heuristic(neighbor, masterEnd);
                neighbor.f = neighbor.g + neighbor.h;
                neighbor.previous = current;
            }
        }


    } else {
        console.log("No solution ");
        noSulotion = false;
        noLoop();
        //No solution
    }
}

function printSpots() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show(color(255));
        }
    }

    for (let i = 0; i < closeSet.length; i++) {
        closeSet[i].show(color(255, 0, 0));
    }

    for (let i = 0; i < openSet.length; i++) {
        openSet[i].show(color(0, 255, 0));
    }

    if (!noSulotion) {
        path = [];
        let temp = current;
        console.log(current.previous);
        path.push(temp);
        while (temp.previous) {
            path.push(temp.previous);
            temp = temp.previous;
        }
    }
    // if (!firstG) {
    //     if (!noSulotion) {
    //         path = [];
    //         let temp = current;
    //         path.push(temp);
    //         while (temp.previous) {
    //             path.push(temp.previous);
    //             temp = temp.previous;
    //         }
    //     }
    // } else {
    //     if (!noSulotion) {
    //         path = [];
    //         if (current.previous !== undefined) {
    //             let temp = current;
    //             path.push(temp);
    //             while (temp.previous) {
    //                 path.push(temp.previous);
    //                 temp = temp.previous;
    //             }
    //         }
    //     }
    // }
    for (let i = 0; i < path.length; i++) {
        path[i].show(color(0, 0, 255));
    }
    if (g1.find) {
        g1.show(color(140, 20, 252))
    } else {
        g1.show(color(255, 0, 255))
    }
    if (g2.find) {
        g2.show(color(140, 20, 252))
    } else {
        g2.show(color(100, 100, 255))
    }


}