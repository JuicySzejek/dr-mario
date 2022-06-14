'use strict'
let firstPreviewPill = true
let endGame = false
//stworzyłem drugą tablice do animacji rzucania
const animationArray = [];
const animationContainer = document.createElement("div");
animationContainer.id = "animationContainer";
document.body.appendChild(animationContainer);
for (let y = 0; y < 8; y++) {
    animationArray.push([])
    for (let x = 0; x < 12; x++) {
        animationArray[y].push(0)
        let boardCell = document.createElement("div");
        boardCell.classList.add("animationCells");
        boardCell.id = `animationCell.${y}.${x}`
        boardCell.style.left = `${24 * x}px`
        boardCell.style.top = `${24 * y}px`
        animationContainer.appendChild(boardCell);
    }

}
const hand = document.createElement('div')
hand.id = "hand"
document.body.appendChild(hand)

const colors = ["", "brown", "blue", "yellow", "brown", "blue", "yellow"];
const imgsLeft = ["", "url(gfx/brown_left.png)", "url(gfx/blue_left.png)", "url(gfx/yellow_left.png)"];
const imgsRight = ["", "url(gfx/brown_right.png)", "url(gfx/blue_right.png)", "url(gfx/yellow_right.png)"];
const imgsDown = ["", "url(gfx/brown_down.png)", "url(gfx/blue_down.png)", "url(gfx/yellow_down.png)"];
const imgsUp = ["", "url(gfx/brown_up.png)", "url(gfx/blue_up.png)", "url(gfx/yellow_up.png)"];
const imgsSolo = ["", "url(gfx/brown_dot.png)", "url(gfx/blue_dot.png)", "url(gfx/yellow_dot.png)", "url(gfx/covid_brown.png)", "url(gfx/covid_blue.png)", "url(gfx/covid_yellow.png)"];
const game = {
    throw: () => {
        const frames = [{
                leftPill: {
                    x: 10,
                    y: 3
                },
                rightPill: {
                    x: 11,
                    y: 3
                },
                hand: 0
            },
            {
                leftPill: {
                    x: 10,
                    y: 3
                },
                rightPill: {
                    x: 10,
                    y: 2
                },
                hand: 0
            },
            {
                leftPill: {
                    x: 10,
                    y: 2
                },
                rightPill: {
                    x: 9,
                    y: 2
                },
                hand: 0
            },
            {
                leftPill: {
                    x: 9,
                    y: 1
                },
                rightPill: {
                    x: 9,
                    y: 2
                },
                hand: 0
            },
            {
                leftPill: {
                    x: 8,
                    y: 1
                },
                rightPill: {
                    x: 9,
                    y: 1
                },
                hand: 1
            },
            {
                leftPill: {
                    x: 8,
                    y: 1
                },
                rightPill: {
                    x: 8,
                    y: 0
                },
                hand: 1
            },
            {
                leftPill: {
                    x: 8,
                    y: 1
                },
                rightPill: {
                    x: 7,
                    y: 1
                },
                hand: 1
            },
            {
                leftPill: {
                    x: 7,
                    y: 0
                },
                rightPill: {
                    x: 7,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 6,
                    y: 1
                },
                rightPill: {
                    x: 7,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 6,
                    y: 1
                },
                rightPill: {
                    x: 6,
                    y: 0
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 6,
                    y: 1
                },
                rightPill: {
                    x: 5,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 5,
                    y: 0
                },
                rightPill: {
                    x: 5,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 4,
                    y: 1
                },
                rightPill: {
                    x: 5,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 4,
                    y: 1
                },
                rightPill: {
                    x: 4,
                    y: 0
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 4,
                    y: 1
                },
                rightPill: {
                    x: 3,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 3,
                    y: 0
                },
                rightPill: {
                    x: 3,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 2,
                    y: 1
                },
                rightPill: {
                    x: 3,
                    y: 1
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 2,
                    y: 1
                },
                rightPill: {
                    x: 2,
                    y: 0
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 2,
                    y: 2
                },
                rightPill: {
                    x: 1,
                    y: 2
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 1,
                    y: 1
                },
                rightPill: {
                    x: 1,
                    y: 2
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 0,
                    y: 2
                },
                rightPill: {
                    x: 1,
                    y: 2
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 0,
                    y: 3
                },
                rightPill: {
                    x: 1,
                    y: 3
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 0,
                    y: 4
                },
                rightPill: {
                    x: 1,
                    y: 4
                },
                hand: 2
            },
            {
                leftPill: {
                    x: 0,
                    y: 5
                },
                rightPill: {
                    x: 1,
                    y: 5
                },
                hand: 2
            }
        ]
        let frame = 1
        let throwingAnimation = setInterval(function () {
            document.getElementById('hand').style.backgroundImage = `url(gfx/hands/${frames[frame].hand}.png)`

            let colorLeft = animationArray[frames[frame - 1].leftPill.y][frames[frame - 1].leftPill.x]
            let colorRight = animationArray[frames[frame - 1].rightPill.y][frames[frame - 1].rightPill.x]

            animationArray[frames[frame - 1].leftPill.y][frames[frame - 1].leftPill.x] = 0
            animationArray[frames[frame - 1].rightPill.y][frames[frame - 1].rightPill.x] = 0

            animationArray[frames[frame].leftPill.y][frames[frame].leftPill.x] = colorLeft
            animationArray[frames[frame].rightPill.y][frames[frame].rightPill.x] = colorRight


            game.reloadAnimation()
            frame++
            if (frame == 24) {
                clearInterval(throwingAnimation)
                document.getElementById('hand').style.backgroundImage = `url(gfx/hands/0.png)`
                animationArray[frames[frame - 1].leftPill.y][frames[frame - 1].leftPill.x] = 0
                animationArray[frames[frame - 1].rightPill.y][frames[frame - 1].rightPill.x] = 0
                setTimeout(() => {
                    game.reloadAnimation()
                }, 20);
            }
        }, 20);
    },
    reloadAnimation: () => {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 12; x++) {

                let animationCell = document.getElementById(`animationCell.${y}.${x}`);
                document.getElementById(`animationCell.${y}.${x}`).style.backgroundColor = colors[animationArray[y][x]]

                document.getElementById(`animationCell.${y}.${x}`).style.backgroundImage = imgsSolo[animationArray[y][x]]

                if (x < 11) {
                    if (animationArray[y][x] != 0 && animationArray[y][x + 1] != 0) {
                        animationCell.style.backgroundImage = imgsLeft[animationArray[y][x]];
                    }
                }
                if (x > 0) {
                    if (animationArray[y][x] != 0 && animationArray[y][x - 1] != 0) {
                        animationCell.style.backgroundImage = imgsRight[animationArray[y][x]];
                    }
                }
                if (y < 7) {
                    if (animationArray[y][x] != 0 && animationArray[y + 1][x] != 0) {
                        animationCell.style.backgroundImage = imgsUp[animationArray[y][x]];
                    }
                }
                if (y > 0) {
                    if (animationArray[y][x] != 0 && animationArray[y - 1][x] != 0) {
                        animationCell.style.backgroundImage = imgsDown[animationArray[y][x]];
                    }
                }
            }
        }
    },
    gameover: () => {
        const marioMad = document.createElement('div')
        marioMad.id = "marioMad"
        document.body.appendChild(marioMad)
        marioMad.style.backgroundImage = "url(./gfx/go_dr.png"
        const losingGame = document.createElement('div')
        losingGame.id = "losingGame"
        document.body.appendChild(losingGame)
        losingGame.style.backgroundImage = "url(./gfx/go.png"
    }
}

//tablica gry
let fields = []
for (let i = 0; i < 16; i++) {
    let now = []
    for (let j = 0; j < 8; j++) {
        let now2 = 0
        now.push(now2)
    }
    fields.push(now)
}

let allTds = document.querySelectorAll("td")
for (let i = 0; i < allTds.length; i++) {
    allTds[i].setAttribute("id", i)
}

let fastGame
let classicGame
let main = {
    currentLvl: 0,
    currentPosition: 0,
    duringClick: false,
    nameOfClickedKey: "",
    codeOfClickedKey: null,
    fields: fields,
    nextBlock: false,
    blockKeys: false,
    duringDifferentAction: false,
    callLateDown: false,
    infoAboutNextColors: ["blue", "yellow"],
    firstRound: true,
    tabOfEnded: [],
    drawTwoColors: function () {
        let possibleColors = ["brown", "blue", "yellow", "brown", "blue", "yellow"];
        let colors = []
        for (let i = 0; i < 2; i++) {
            //zmieniłem
            let now = possibleColors[Math.floor(Math.random() * 3) + 1]
            colors.push(now)
        }
        return (colors)

    },
    addNewBoxes: function () {
        this.duringDifferentAction = false
        this.blockKeys = false
        clearInterval(fastGame)
        clearInterval(classicGame)

        this.currentPosition = 0
        this.currentLvl = 0
        let toClear = document.querySelectorAll("td")
        for (let i = 0; i < toClear.length; i++) {
            toClear[i].removeAttribute("class")
        }
        //tutaj coś próbowałem wymodzić z preview tabletki

        if (firstPreviewPill) {
            let colors = this.drawTwoColors()
            let numbersOfColors = colors.map((elem) => {
                if (elem == "brown") {
                    return (1)
                } else if (elem == "blue") {
                    return (2)
                } else if (elem == "yellow") {
                    return (3)
                }
            })
            main.infoAboutNextColors = colors
            animationArray[3][11] = numbersOfColors[0]
            animationArray[3][10] = numbersOfColors[1]
        }

        game.throw()
        setTimeout(() => {
            firstPreviewPill = false
            let colors = main.infoAboutNextColors
            let numbersOfColors = main.infoAboutNextColors.map((elem) => {
                if (elem == "brown") {
                    return (1)
                } else if (elem == "blue") {
                    return (2)
                } else if (elem == "yellow") {
                    return (3)
                }
            })
            game.reloadAnimation()
            classicGame = setInterval(() => {
                main.moveDown()
            }, 400)
            main.fields[0][3] = numbersOfColors[0]
            main.fields[0][4] = numbersOfColors[1]
            document.getElementById("3").style.backgroundColor = colors[0]
            document.getElementById("3").setAttribute("class", "currentMoving")
            document.getElementById("4").style.backgroundColor = colors[1]
            document.getElementById("4").setAttribute("class", "currentMoving")
            main.infoAboutNextColors = this.drawTwoColors()
            let colors2 = main.infoAboutNextColors
            let numbersOfColors2 = main.infoAboutNextColors.map((elem) => {
                if (elem == "brown") {
                    return (1)
                } else if (elem == "blue") {
                    return (2)
                } else if (elem == "yellow") {
                    return (3)
                }
            })
            animationArray[3][10] = numbersOfColors2[0]
            animationArray[3][11] = numbersOfColors2[1]
            this.changeColorsToImages()
        }, 450);
    },


    moveDown: function () {
        if (this.duringDifferentAction == false) {
            // this.blockKeys = true
            this.duringDifferentAction = true
            if (this.nextBlock == true) {
                this.deleting()
                this.addNewBoxes()
                this.nextBlock = false
                if (this.fields[1][3] != 0 || this.fields[1][4] != 0) {
                    setTimeout(() => {
                        loupe.laughingViruses()
                        endGame = true
                        game.gameover()

                    }, 400)
                }
            } else if (!endGame) {
                let currentNumberOfBottomSquare
                let bottom = 0
                let col
                let tabOfRows = []
                if (this.currentPosition == 0 || this.currentPosition == 2) {
                    let toMove = document.querySelectorAll(".currentMoving")
                    for (let i = 0; i < toMove.length; i++) {
                        let prevId = toMove[i].getAttribute("id")
                        let currentId = parseInt(prevId) + 8
                        currentNumberOfBottomSquare = currentId
                        document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                        document.getElementById(prevId).style.backgroundColor = "black"
                        let prevRow = Math.floor(prevId / 8)
                        let prevCol = prevId % 8
                        this.fields[prevRow + 1][prevCol] = this.fields[prevRow][prevCol]
                        if (prevRow + 2 < 16) {
                            if (this.fields[prevRow + 2][prevCol] != 0) {
                                this.nextBlock = true
                            }
                        } else {
                            this.nextBlock = true
                        }
                        this.fields[prevRow][prevCol] = 0
                    }
                    // let now = []
                    for (let i = 0; i < toMove.length; i++) {
                        let prevId = toMove[i].getAttribute("id")
                        let currentId = parseInt(prevId) + 8
                        document.getElementById(prevId).removeAttribute("class")
                        // now.push(document.getElementById(prevId))
                        document.getElementById(prevId).style.backgroundImage = "none"
                        document.getElementById(currentId).setAttribute("class", "currentMoving")
                    }
                    // this.tabOfEnded.push(now)
                } else if (this.currentPosition == 1 || this.currentPosition == 3) {
                    let toMove = document.querySelectorAll(".currentMoving")
                    toMove = Array.prototype.slice.call(toMove);
                    toMove.reverse()
                    let prevCol
                    for (let i = 0; i < toMove.length; i++) {
                        let prevId = toMove[i].getAttribute("id")
                        let currentId = parseInt(prevId) + 8
                        currentNumberOfBottomSquare = currentId
                        document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                        document.getElementById(prevId).style.backgroundColor = "black"
                        let prevRow = Math.floor(prevId / 8)
                        tabOfRows.push(prevRow)
                        prevCol = prevId % 8
                        this.fields[prevRow + 1][prevCol] = this.fields[prevRow][prevCol]
                        this.fields[prevRow][prevCol] = 0
                    }

                    tabOfRows.sort(function (a, b) {
                        return b - a
                    });
                    if (tabOfRows[0] + 2 < 16) {
                        if (this.fields[tabOfRows[0] + 2][prevCol] != 0) {
                            this.nextBlock = true
                        }
                    }
                    // let now = []
                    for (let i = 0; i < toMove.length; i++) {
                        let prevId = toMove[i].getAttribute("id")
                        let currentId = parseInt(prevId) + 8
                        document.getElementById(prevId).removeAttribute("class")
                        // now.push(document.getElementById(prevId))
                        document.getElementById(prevId).style.backgroundImage = "none"
                        document.getElementById(currentId).setAttribute("class", "currentMoving")
                    }
                    // this.tabOfEnded.push(now)
                }
                currentNumberOfBottomSquare = Math.floor(currentNumberOfBottomSquare / 8)
                if (currentNumberOfBottomSquare == 15) {
                    this.nextBlock = true
                }
                if (tabOfRows[0] != undefined) {
                    if (tabOfRows[0] == 14) {
                        this.nextBlock = true
                    }
                }
                this.currentLvl += 1
            }
            this.duringDifferentAction = false
        }
        // else {
        //     // this.callLateDown = true
        // }
        this.changeColorsToImages()
    },
    moveLeft: function (callback, first, helpColor, helpValue, cause) {
        if (this.duringDifferentAction == false || first == false) {
            this.duringDifferentAction = true
            let toMove = document.querySelectorAll(".currentMoving")
            if (toMove.length > 0) {
                let possibleToMove
                if (toMove[0].getAttribute("id") % 8 != 0) {
                    if (this.currentPosition == 0 || this.currentPosition == 2) {
                        let checkIfPossible = parseInt(toMove[0].getAttribute("id"))
                        let rowToCheck = Math.floor(checkIfPossible / 8)
                        let colToCheck = (checkIfPossible % 8) - 1
                        possibleToMove = (this.fields[rowToCheck][colToCheck] == 0)
                    } else {
                        let checkIfPossible0 = parseInt(toMove[0].getAttribute("id"))
                        let checkIfPossible1 = parseInt(toMove[1].getAttribute("id"))
                        let rowToCheck0 = Math.floor(checkIfPossible0 / 8)
                        let colToCheck0 = (checkIfPossible0 % 8) - 1
                        let rowToCheck1 = Math.floor(checkIfPossible1 / 8)
                        let colToCheck1 = (checkIfPossible1 % 8) - 1
                        possibleToMove = (this.fields[rowToCheck0][colToCheck0] == 0 && this.fields[rowToCheck1][colToCheck1] == 0)
                    }
                    if (possibleToMove) {
                        for (let i = 0; i < toMove.length; i++) {
                            if (cause == "right" && i == 0) {
                                let prevId = toMove[i].getAttribute("id")
                                let currentId = parseInt(prevId) - 1
                                document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                                document.getElementById(prevId).style.backgroundColor = helpColor
                                let prevRow = Math.floor(prevId / 8)
                                let prevCol = prevId % 8
                                this.fields[prevRow][prevCol - 1] = this.fields[prevRow][prevCol]
                                this.fields[prevRow][prevCol] = helpValue
                            } else if (cause == "left" && i == 1) {
                                let prevId = toMove[i].getAttribute("id")
                                let currentId = parseInt(prevId) - 1
                                document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                                document.getElementById(prevId).style.backgroundColor = helpColor
                                let prevRow = Math.floor(prevId / 8)
                                let prevCol = prevId % 8
                                this.fields[prevRow][prevCol - 1] = this.fields[prevRow][prevCol]
                                this.fields[prevRow][prevCol] = helpValue
                            } else {
                                let prevId = toMove[i].getAttribute("id")
                                let currentId = parseInt(prevId) - 1
                                document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                                document.getElementById(prevId).style.backgroundColor = "black"
                                let prevRow = Math.floor(prevId / 8)
                                let prevCol = prevId % 8
                                this.fields[prevRow][prevCol - 1] = this.fields[prevRow][prevCol]
                                this.fields[prevRow][prevCol] = 0
                            }

                        }
                        // let now = []
                        for (let i = 0; i < toMove.length; i++) {
                            let prevId = toMove[i].getAttribute("id")
                            let currentId = parseInt(prevId) - 1
                            document.getElementById(prevId).removeAttribute("class")
                            // now.push(document.getElementById(prevId))
                            document.getElementById(prevId).style.backgroundImage = "none"
                            document.getElementById(currentId).setAttribute("class", "currentMoving")
                        }
                        // this.tabOfEnded.push(now)
                        if (this.currentPosition == 0 || this.currentPosition == 2) {
                            let afterMove = document.querySelectorAll(".currentMoving")
                            for (let i = 0; i < afterMove.length; i++) {
                                let now = parseInt(afterMove[i].getAttribute("id"))
                                let nowRow = Math.floor(now / 8)
                                let nowCol = now % 8
                                if (this.fields[nowRow + 1][nowCol] != 0) {
                                    this.nextBlock = true
                                }
                            }
                        } else {
                            let afterMove = document.querySelectorAll(".currentMoving")
                            afterMove = afterMove[1]
                            let now = parseInt(afterMove.getAttribute("id"))
                            let nowRow = Math.floor(now / 8)
                            let nowCol = now % 8
                            if (nowRow == 15) {
                                this.nextBlock = true
                            } else if (this.fields[nowRow + 1][nowCol] != 0) {
                                this.nextBlock = true
                            }
                        }
                    }
                }
                callback()
            } else {
                callback()
            }
        }
        // this.blockKeys = false
    },
    moveRight: function (callback, first, helpColor, helpValue) {
        if (this.duringDifferentAction == false || first == false) {
            // this.blockKeys = true
            this.duringDifferentAction = true
            let toMove = document.querySelectorAll(".currentMoving")
            if (toMove.length > 0) {
                toMove = Array.prototype.slice.call(toMove);
                toMove.reverse()
                let possibleToMove
                if (this.currentPosition == 0 || this.currentPosition == 2) {
                    let checkIfPossible = parseInt(toMove[0].getAttribute("id"))
                    let rowToCheck = Math.floor(checkIfPossible / 8)
                    let colToCheck = (checkIfPossible % 8) + 1
                    possibleToMove = (this.fields[rowToCheck][colToCheck] == 0)
                } else {
                    let checkIfPossible0 = parseInt(toMove[0].getAttribute("id"))
                    let checkIfPossible1 = parseInt(toMove[1].getAttribute("id"))
                    let rowToCheck0 = Math.floor(checkIfPossible0 / 8)
                    let colToCheck0 = (checkIfPossible0 % 8) + 1
                    let rowToCheck1 = Math.floor(checkIfPossible1 / 8)
                    let colToCheck1 = (checkIfPossible1 % 8) + 1
                    possibleToMove = (this.fields[rowToCheck0][colToCheck0] == 0 && this.fields[rowToCheck1][colToCheck1] == 0)
                }
                if (possibleToMove) {
                    if (toMove[0].getAttribute("id") % 8 != 7) {
                        for (let i = 0; i < toMove.length; i++) {
                            let prevId = toMove[i].getAttribute("id")
                            let currentId = parseInt(prevId) + 1
                            document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                            document.getElementById(prevId).style.backgroundColor = helpColor
                            let prevRow = Math.floor(prevId / 8)
                            let prevCol = prevId % 8
                            this.fields[prevRow][prevCol + 1] = this.fields[prevRow][prevCol]
                            this.fields[prevRow][prevCol] = helpValue
                        }
                        // let now = []
                        for (let i = 0; i < toMove.length; i++) {
                            let prevId = toMove[i].getAttribute("id")
                            let currentId = parseInt(prevId) + 1
                            document.getElementById(prevId).removeAttribute("class")
                            // now.push(document.getElementById(prevId))
                            document.getElementById(prevId).style.backgroundImage = "none"
                            document.getElementById(currentId).setAttribute("class", "currentMoving")
                        }
                        // this.tabOfEnded.push(now)
                    }
                    if (this.currentPosition == 0 || this.currentPosition == 2) {
                        let afterMove = document.querySelectorAll(".currentMoving")
                        for (let i = 0; i < afterMove.length; i++) {
                            let now = parseInt(afterMove[i].getAttribute("id"))
                            let nowRow = Math.floor(now / 8)
                            let nowCol = now % 8
                            if (this.fields[nowRow + 1][nowCol] != 0) {
                                this.nextBlock = true
                            }
                        }
                    } else {
                        let afterMove = document.querySelectorAll(".currentMoving")
                        afterMove = afterMove[1]
                        let now = parseInt(afterMove.getAttribute("id"))
                        let nowRow = Math.floor(now / 8)
                        let nowCol = now % 8
                        if (this.fields[nowRow + 1][nowCol] != 0) {
                            this.nextBlock = true
                        }
                    }
                }
                // this.blockKeys = false
                callback()
            } else {
                callback()
            }
        }
    },
    turnLeft: function (callback) {
        if (this.duringDifferentAction == false) {
            // this.blockKeys = true
            if (this.currentLvl > 0) {
                let possibleToExecute = true
                let toCheck = document.getElementsByClassName("currentMoving")
                this.duringDifferentAction = true
                let idChange
                let rowChange
                let colChange
                let toMove
                let properToMove
                let extraMove = false
                let extraMove2 = false
                if (this.currentPosition == 0) { //nie wystepuje nieporzadane przejscie 
                    let properToCheck = toCheck[1]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId - 9) / 8)
                    let colToCheck = (properToCheckId - 9) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0) {
                        possibleToExecute = false
                    }
                    idChange = -9
                    rowChange = -1
                    colChange = -1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[1]
                } else if (this.currentPosition == 1) { //naprawione
                    let properToCheck = toCheck[0]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId + 9) / 8)
                    let colToCheck = (properToCheckId + 9) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0 || colToCheck == 0) {
                        possibleToExecute = false
                    }
                    idChange = 7
                    rowChange = 1
                    colChange = -1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[0]
                    extraMove = true
                } else if (this.currentPosition == 2) { //nie moze wystapic nieporzadane przejscie
                    let properToCheck = toCheck[0]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId + 8) / 8)
                    let colToCheck = (properToCheckId + 8) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0) {
                        possibleToExecute = false
                    }
                    idChange = 9
                    rowChange = 1
                    colChange = 1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[0]
                    extraMove2 = true
                } else if (this.currentPosition == 3) { //naprawione
                    let properToCheck = toCheck[1]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId - 7) / 8)
                    let colToCheck = (properToCheckId - 7) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0 || colToCheck == 0) {
                        possibleToExecute = false
                    }
                    idChange = -7
                    rowChange = -1
                    colChange = 1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[1]
                }
                if (possibleToExecute == true) {
                    let prevId = properToMove.getAttribute("id")
                    let prevRow = Math.floor(prevId / 8)
                    let prevCol = prevId % 8
                    if (prevCol == 7 && this.currentPosition == 3) {
                        let extraIdChange = -1
                        let extraRowChange = 0
                        let extraColChange = -1
                        idChange = -8
                        rowChange = -1
                        colChange = 0
                        let extraProperToMove = toMove[0]
                        let extraPrevId = extraProperToMove.getAttribute("id")
                        let extraPrevRow = Math.floor(extraPrevId / 8)
                        let extraPrevCol = extraPrevId % 8
                        let extraCurrentId = parseInt(extraPrevId) + extraIdChange
                        document.getElementById(extraCurrentId).style.backgroundColor = document.getElementById(extraPrevId).style.backgroundColor
                        document.getElementById(extraPrevId).style.backgroundColor = "black"
                        let extraCurrentRow = extraPrevRow + extraRowChange
                        let extraCurrentCol = extraPrevCol + extraColChange
                        this.fields[extraCurrentRow][extraCurrentCol] = this.fields[extraPrevRow][extraPrevCol]
                        this.fields[extraPrevRow][extraPrevCol] = 0
                        document.getElementById(prevId).removeAttribute("class")
                        document.getElementById(prevId).style.backgroundImage = "none"
                        document.getElementById(extraCurrentId).setAttribute("class", "currentMoving")
                    } else if (prevCol == 0 && this.currentPosition == 1) {
                        extraMove = false
                        let extraIdChange = 1
                        let extraRowChange = 0
                        let extraColChange = 1
                        idChange = 8
                        rowChange = 1
                        colChange = 0
                        let extraProperToMove = toMove[1]
                        let extraPrevId = extraProperToMove.getAttribute("id")
                        let extraPrevRow = Math.floor(extraPrevId / 8)
                        let extraPrevCol = extraPrevId % 8
                        let extraCurrentId = parseInt(extraPrevId) + extraIdChange
                        document.getElementById(extraCurrentId).style.backgroundColor = document.getElementById(extraPrevId).style.backgroundColor
                        document.getElementById(extraPrevId).style.backgroundColor = "black"
                        let extraCurrentRow = extraPrevRow + extraRowChange
                        let extraCurrentCol = extraPrevCol + extraColChange
                        this.fields[extraCurrentRow][extraCurrentCol] = this.fields[extraPrevRow][extraPrevCol]
                        this.fields[extraPrevRow][extraPrevCol] = 0
                        document.getElementById(prevId).removeAttribute("class")
                        document.getElementById(prevId).style.backgroundImage = "none"
                        document.getElementById(extraCurrentId).setAttribute("class", "currentMoving")
                    }
                    this.currentPosition += 1
                    this.currentPosition = this.currentPosition % 4
                    // let prevId = properToMove.getAttribute("id")
                    let currentId = parseInt(prevId) + idChange
                    let help = document.getElementById(currentId).style.backgroundColor
                    document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                    document.getElementById(prevId).style.backgroundColor = "black"
                    // let prevRow = Math.floor(prevId / 8)
                    let currentRow = prevRow + rowChange
                    // let prevCol = prevId % 8
                    let currentCol = prevCol + colChange
                    let help2 = this.fields[currentRow][currentCol]
                    this.fields[currentRow][currentCol] = this.fields[prevRow][prevCol]
                    this.fields[prevRow][prevCol] = 0
                    document.getElementById(prevId).removeAttribute("class")
                    document.getElementById(prevId).style.backgroundImage = "none"
                    document.getElementById(currentId).setAttribute("class", "currentMoving")
                    if (extraMove == true) {
                        main.moveRight(callback, false, help, help2)
                    } else if (extraMove2 == true) {
                        main.moveLeft(callback, false, help, help2, "left")
                    } else {
                        callback()
                    }
                } else {
                    callback()
                }
            }
        }
        // this.blockKeys = false
    },
    turnRight: function (callback) {
        if (this.duringDifferentAction == false) {
            // this.blockKeys = true
            if (this.currentLvl > 0) {
                let possibleToExecute = true
                let toCheck = document.getElementsByClassName("currentMoving")
                this.duringDifferentAction = true
                let idChange
                let rowChange
                let colChange
                let toMove
                let properToMove
                let extraMove = false
                let extraMove2 = false
                if (this.currentPosition == 0) { //nie wystepuje nieporzadane przejscie
                    let properToCheck = toCheck[1]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId + 7) / 8)
                    let colToCheck = (properToCheckId + 7) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0) {
                        possibleToExecute = false
                    }
                    idChange = 7
                    rowChange = 1
                    colChange = -1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[1]
                } else if (this.currentPosition == 1) { //naprawione
                    let properToCheck = toCheck[1]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId - 7) / 8)
                    let colToCheck = (properToCheckId - 7) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0 || colToCheck == 0) {
                        possibleToExecute = false
                    }
                    idChange = -9
                    rowChange = -1
                    colChange = -1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[1]
                    extraMove = true
                } else if (this.currentPosition == 2) { //nie wystepuje nieporzadane przejscie
                    let properToCheck = toCheck[0]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId - 8) / 8)
                    let colToCheck = (properToCheckId - 8) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0) {
                        possibleToExecute = false
                    }
                    idChange = -7
                    rowChange = -1
                    colChange = 1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[0]
                    extraMove2 = true
                } else if (this.currentPosition == 3) {
                    let properToCheck = toCheck[0]
                    let properToCheckId = parseInt(properToCheck.getAttribute("id"))
                    let rowToCheck = Math.floor((properToCheckId + 9) / 8)
                    let colToCheck = (properToCheckId + 9) % 8
                    if (this.fields[rowToCheck][colToCheck] != 0 || colToCheck == 0) {
                        possibleToExecute = false
                    }
                    idChange = 9
                    rowChange = 1
                    colChange = 1
                    toMove = document.querySelectorAll(".currentMoving")
                    properToMove = toMove[0]
                }
                if (possibleToExecute == true) {
                    let prevId = properToMove.getAttribute("id")
                    let prevRow = Math.floor(prevId / 8)
                    let prevCol = prevId % 8
                    if (prevCol == 7 && this.currentPosition == 3) {
                        let extraIdChange = -1
                        let extraRowChange = 0
                        let extraColChange = -1
                        idChange = 8
                        rowChange = 1
                        colChange = 0
                        let extraProperToMove = toMove[1]
                        let extraPrevId = extraProperToMove.getAttribute("id")
                        let extraPrevRow = Math.floor(extraPrevId / 8)
                        let extraPrevCol = extraPrevId % 8
                        let extraCurrentId = parseInt(extraPrevId) + extraIdChange
                        document.getElementById(extraCurrentId).style.backgroundColor = document.getElementById(extraPrevId).style.backgroundColor
                        document.getElementById(extraPrevId).style.backgroundColor = "black"
                        let extraCurrentRow = extraPrevRow + extraRowChange
                        let extraCurrentCol = extraPrevCol + extraColChange
                        this.fields[extraCurrentRow][extraCurrentCol] = this.fields[extraPrevRow][extraPrevCol]
                        this.fields[extraPrevRow][extraPrevCol] = 0
                        document.getElementById(prevId).removeAttribute("class")
                        document.getElementById(prevId).style.backgroundImage = "none"
                        document.getElementById(extraCurrentId).setAttribute("class", "currentMoving")
                    } else if (prevCol == 0 && this.currentPosition == 1) {
                        extraMove = false
                        let extraIdChange = 1
                        let extraRowChange = 0
                        let extraColChange = 1
                        idChange = -8
                        rowChange = -1
                        colChange = 0
                        let extraProperToMove = toMove[0]
                        let extraPrevId = extraProperToMove.getAttribute("id")
                        let extraPrevRow = Math.floor(extraPrevId / 8)
                        let extraPrevCol = extraPrevId % 8
                        let extraCurrentId = parseInt(extraPrevId) + extraIdChange
                        document.getElementById(extraCurrentId).style.backgroundColor = document.getElementById(extraPrevId).style.backgroundColor
                        document.getElementById(extraPrevId).style.backgroundColor = "black"
                        let extraCurrentRow = extraPrevRow + extraRowChange
                        let extraCurrentCol = extraPrevCol + extraColChange
                        this.fields[extraCurrentRow][extraCurrentCol] = this.fields[extraPrevRow][extraPrevCol]
                        this.fields[extraPrevRow][extraPrevCol] = 0
                        document.getElementById(prevId).removeAttribute("class")
                        document.getElementById(prevId).style.backgroundImage = "none"
                        document.getElementById(extraCurrentId).setAttribute("class", "currentMoving")
                    }
                    this.currentPosition += 1
                    this.currentPosition = this.currentPosition % 4
                    let currentId = parseInt(prevId) + idChange
                    let help = document.getElementById(currentId).style.backgroundColor
                    document.getElementById(currentId).style.backgroundColor = document.getElementById(prevId).style.backgroundColor
                    document.getElementById(prevId).style.backgroundColor = "black"
                    let currentRow = prevRow + rowChange
                    let currentCol = prevCol + colChange
                    let help2 = this.fields[currentRow][currentCol]
                    this.fields[currentRow][currentCol] = this.fields[prevRow][prevCol]
                    this.fields[prevRow][prevCol] = 0
                    document.getElementById(prevId).removeAttribute("class")
                    document.getElementById(prevId).style.backgroundImage = "none"
                    document.getElementById(currentId).setAttribute("class", "currentMoving")
                    if (currentRow == 15) {
                        this.nextBlock = true
                    }
                    if (extraMove == true) {
                        main.moveRight(callback, false, help, help2)
                    } else if (extraMove2 == true) {
                        main.moveLeft(callback, false, help, help2, "right")
                    } else {
                        callback()
                    }
                    // this.blockKeys = false
                } else {
                    callback()
                }
            }

        }
    },
    fastDown: function () {
        clearInterval(classicGame)
        fastGame = setInterval(() => {
            main.moveDown()
        }, 40)
    },
    deleting: function () {
        let tabDeleting = []
        for (let i = 0; i < this.fields.length; i++) {
            let toDel = []
            for (let j = 0; j < this.fields[i].length; j++) {
                if (j < this.fields[i].length - 3) {
                    let startValue = this.fields[i][j]
                    if (this.fields[i][j + 1] == startValue && this.fields[i][j + 2] == startValue && this.fields[i][j + 3] == startValue && startValue != 0) {
                        toDel.push(j, j + 1, j + 2, j + 3)
                    }
                }
            }

            if (toDel.length > 0) {
                for (let j = 0; j < toDel.length; j++) {
                    let idToDel = (i * 8) + toDel[j]
                    tabDeleting.push(idToDel)
                    let colorToDel = document.getElementById(idToDel).style.backgroundColor
                    let position = document.getElementById(idToDel).style.backgroundImage
                    position = position.split("/")
                    position = position[2]
                    position = position.split(".")
                    position = position[0]
                    position = position.split("_")
                    position = position[1]
                    if (position == "up") {
                        let helpId = idToDel + 8
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    } else if (position == "down") {
                        let helpId = idToDel - 8
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    } else if (position == "left") {
                        let helpId = idToDel + 1
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    } else if (position == "right") {
                        let helpId = idToDel - 1
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    }
                    document.getElementById(idToDel).style.backgroundImage = `url('./gfx/${colorToDel}_o.png')`
                    // document.getElementById(idToDel).classList.add("del")
                    setTimeout(() => {
                        document.getElementById(idToDel).style.backgroundImage = "none"
                        document.getElementById(idToDel).style.backgroundColor = ""
                        // document.getElementById(idToDel).classList.remove("del")
                    }, 200)
                }
            }

        }
        for (let i = 0; i < 8; i++) {
            let toDel = []
            for (let j = 0; j < this.fields.length; j++) {
                if (j < this.fields.length - 3) {
                    let startValue = this.fields[j][i]
                    if (this.fields[j + 1][i] == startValue && this.fields[j + 2][i] == startValue && this.fields[j + 3][i] == startValue && startValue != 0) {
                        toDel.push(j, j + 1, j + 2, j + 3)
                    }
                }
            }
            if (toDel.length > 0) {
                for (let j = 0; j < toDel.length; j++) {
                    let idToDel = (toDel[j] * 8) + i
                    tabDeleting.push(idToDel)
                    let colorToDel = document.getElementById(idToDel).style.backgroundColor
                    let position = document.getElementById(idToDel).style.backgroundImage
                    position = position.split("/")
                    position = position[2]
                    position = position.split(".")
                    position = position[0]
                    position = position.split("_")
                    position = position[1]
                    if (position == "up") {
                        let helpId = idToDel + 8
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    } else if (position == "down") {
                        let helpId = idToDel - 8
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    } else if (position == "left") {
                        let helpId = idToDel + 1
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    } else if (position == "right") {
                        let helpId = idToDel - 1
                        let helpCol = document.getElementById(helpId).style.backgroundColor
                        if (document.getElementById(helpId).style.backgroundImage != "none") {
                            document.getElementById(helpId).style.backgroundImage = `url('./gfx/${helpCol}_dot.png')`
                        }
                    }
                    // document.getElementById(idToDel).style.backgroundImage = `url('./gfx/${colorToDel}_o.png')`
                    document.getElementById(idToDel).style.backgroundImage = `url('./gfx/${colorToDel}_o.png')`
                    // document.getElementById(idToDel).classList.add("del")
                    setTimeout(() => {
                        document.getElementById(idToDel).style.backgroundImage = "none"
                        document.getElementById(idToDel).style.backgroundColor = ""
                        // document.getElementById(idToDel).classList.remove("del")
                    }, 200)

                }
            }
        }
        for (let i = 0; i < tabDeleting.length; i++) {
            let rowToDel = Math.floor(tabDeleting[i] / 8)
            let colToDel = tabDeleting[i] % 8
            this.fields[rowToDel][colToDel] = 0
        }
    },
    changeColorsToImages: function () {
        let allTds2 = document.getElementsByClassName("currentMoving")
        for (let i = 0; i < allTds2.length; i++) {
            // if (!allTds2[i].classList.contains("del")) {
            //     allTds2[i].style.backgroundImage = "none"
            // } else {
            // }
            if (allTds2[i].style.backgroundColor != "black") {
                let properColor = allTds2[i].style.backgroundColor
                if (properColor != "") {
                    if (this.currentPosition == 0 || this.currentPosition == 2) {
                        if (i == 0) {
                            allTds2[i].style.backgroundImage = `url('./gfx/${properColor}_left.png')`
                        } else {
                            allTds2[i].style.backgroundImage = `url('./gfx/${properColor}_right.png')`
                        }
                    } else {
                        if (i == 0) {
                            allTds2[i].style.backgroundImage = `url('./gfx/${properColor}_up.png')`
                        } else {
                            allTds2[i].style.backgroundImage = `url('./gfx/${properColor}_down.png')`
                        }
                    }

                }
            }
        }
    }
}

function fCallback() {
    main.duringDifferentAction = false
    main.changeColorsToImages()
    // if (main.callLateDown == true) {
    //     main.callLateDown = false
    //     main.moveDown()
    // }
}


main.addNewBoxes()
//zdarzenia klawiatury
document.addEventListener("keydown", function (event) {
    if (main.duringClick == false && main.blockKeys == false && main.duringDifferentAction == false && main.nextBlock == false) {
        // main.duringDifferentAction = true
        main.duringClick = true
        setTimeout(function (params) {
            main.duringClick = false
        }, 500)
        let nameOfKey = event.key
        main.nameOfKey = nameOfKey
        let codeOfKey = event.key.charCodeAt(0)
        main.codeOfKey = codeOfKey
        if (nameOfKey == "ArrowLeft" || codeOfKey == 97) {
            main.moveLeft(fCallback, true, "black", 0, null)
        } else if (nameOfKey == "ArrowRight" || codeOfKey == 100) {
            main.moveRight(fCallback, true, "black", 0)
        } else if (nameOfKey == "ArrowUp" || nameOfKey == "w") {
            main.turnLeft(fCallback)
        } else if (nameOfKey == "Shift") {
            main.turnRight(fCallback)
        } else if (nameOfKey == "ArrowDown" || nameOfKey == "s") {
            main.blockKeys = true
            main.fastDown()
        }
    }
})

document.addEventListener("keyup", function (event) {
    if (event.key == main.nameOfKey && main.duringClick == true) {
        main.duringClick = false
    }
})

// tańczące wirusy, wraz ze "przyszłościowym" śmiechem po przegranej grze
let dancing = null
let moving = null
const brownVirus = document.createElement('div')
brownVirus.id = "brown"
document.body.appendChild(brownVirus)

const blueVirus = document.createElement('div')
blueVirus.id = "blue"
document.body.appendChild(blueVirus)

const yellowVirus = document.createElement('div')
yellowVirus.id = "yellow"
document.body.appendChild(yellowVirus)
const loupe = {
    dancingViruses: () => {

        let interval = 1
        let loop = 0
        dancing = setInterval(() => {
            brownVirus.style.backgroundImage = `url(gfx/loupe/br/${interval
                }.png)`
            blueVirus.style.backgroundImage = `url(gfx/loupe/bl/${interval
                }.png)`
            yellowVirus.style.backgroundImage = `url(gfx/loupe/yl/${interval
                }.png)`
            if (loop % 2 == 0) {
                interval++
            } else {
                interval--
            }
            if (interval == 3 || interval == 1) {
                loop++
            }
        }, 250);
    },
    movingViruses: () => {
        const positions = [{
                top: "391px",
                left: "55px"
            },
            {
                top: "406px",
                left: "55px"
            },
            {
                top: "430px",
                left: "70px"
            },
            {
                top: "451px",
                left: "75px"
            },
            {
                top: "457px",
                left: "97px"
            },
            {
                top: "466px",
                left: "120px"
            },

            {
                top: "466px",
                left: "154px"
            },
            {
                top: "459px",
                left: "163px"
            },
            {
                top: "435px",
                left: "190px"
            },
            {
                top: "411px",
                left: "196px"
            },
            {
                top: "384px",
                left: "189px"
            },
            {
                top: "360px",
                left: "184px"
            },

            {
                top: "340px",
                left: "172px"
            },
            {
                top: "333px",
                left: "147px"
            },
            {
                top: "333px",
                left: "115px"
            },
            {
                top: "337px",
                left: "97px"
            },
            {
                top: "361px",
                left: "70px"
            },
            {
                top: "391px",
                left: "55px"
            }
        ]
        let interval = 1
        let offsetBlue = 6
        let offsetYellow = 12
        moving = setInterval(() => {
            brownVirus.style.top = positions[interval].top
            brownVirus.style.left = positions[interval].left
            blueVirus.style.top = positions[interval + offsetBlue].top
            blueVirus.style.left = positions[interval + offsetBlue].left
            yellowVirus.style.top = positions[interval + offsetYellow].top
            yellowVirus.style.left = positions[interval + offsetYellow].left
            interval++
            if (interval == 18) {
                interval = 0
                offsetBlue = 6
                offsetYellow = 12
            }
            if (offsetBlue + interval == 18) {
                offsetBlue = -12
            }
            if (offsetYellow + interval == 18) {
                offsetYellow = -6
            }
        }, 1000);
    },

    laughingViruses: () => {
        clearInterval(dancing)
        clearInterval(moving)
        let interval = 2
        setInterval(() => {
            brownVirus.style.backgroundImage = `url(gfx/loupe/br/${
                interval
            }.png)`
            blueVirus.style.backgroundImage = `url(gfx/loupe/bl/${
                interval
            }.png)`
            yellowVirus.style.backgroundImage = `url(gfx/loupe/yl/${
                interval
            }.png)`
            if (interval == 2) {
                interval = 4
            } else {
                interval = 2
            }
        }, 250);
    }
}
loupe.movingViruses()
loupe.dancingViruses()

// setInterval(() => {
//     console.log(main.tabOfEnded)
// }, 2000);