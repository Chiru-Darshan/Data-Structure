const numberOfHouses = 9;
const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const buildRelationShip = (coins) => {
    let house = {}
    coins.forEach((coin, index) => {
        house[index + 1] = coin
    })

    return house
}

const moveRight = (houses, index, target) => {
    let distance = 0
    let count = 0
    let len = Object.keys(houses).length
    while (index <= len) {

        count = count + 1
        distance = distance + houses[index]
        if (distance >= target) {
            break
        } else {
            index += 1;
        }
    }
    if (distance >= target) {
        return count
    } else {
        return 0
    }

}
const moveLeft = (houses, index, target) => {
    let distance = 0
    let count = 0
    let len = Object.keys(houses).length

    while (index >= 1) {
        count = count + 1
        distance = distance + houses[index]
        if (distance >= target) {
            break
        } else {
            index -= 1;
        }
    }
    if (distance >= target) {
        return count
    } else {
        return 0
    }

}


const shortestPath = (numberOfHouses, coins, target) => {
    let houses = buildRelationShip(coins)
    let dis = numberOfHouses

    console.log(houses)

    for (let i = 1; i <= numberOfHouses; i++) {
        let left = moveLeft(houses, i, target)
        let right = moveRight(houses, i, target)
        console.log(` i : ${i}| left : ${left} | right : ${right}`)

        if (left !== 0 && right !== 0) {
            let distance = Math.min(left, right)
            if (distance < dis) dis = distance
        } else if (left != 0 && right === 0) {
            if (left < dis) dis = left
        } else {
            if (right < dis) dis = right
        }
    }

    console.log(dis)

}

shortestPath(numberOfHouses, coins, 15)