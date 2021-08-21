const computeCharge = (unit, currentCharge, dst, limit, totalMin) => {
    // console.log(`Units :${unit}`)
    if (dst > limit) {
        let period = limit - currentCharge
        // console.log(`period : ${period}`)
        let min = Math.ceil(period / unit)
        // console.log(`minutes : ${min}`)
        currentCharge = currentCharge + (min * unit)
        totalMin = totalMin + min
        // console.log(`charge ${currentCharge}% in ${totalMin} minutes `)
    } else {
        let period = dst - currentCharge
        // console.log(`period : ${period}`)
        let min = Math.ceil(period / unit)
        // console.log(`minutes : ${min}`)
        currentCharge = currentCharge + (min * unit)
        totalMin = totalMin + min
        // console.log(`charge ${currentCharge}% in ${totalMin} minutes `)
    }
    return {
        currentCharge: currentCharge,
        totalMin: totalMin
    }

}




const mobileCharge = (src, dst) => {

    const updateVariables = (result) => {
        currentCharge = result['currentCharge']
        totalMin = result['totalMin']
    }

    let currentCharge = src;
    let totalMin = 0;

    if (currentCharge >= 0 && currentCharge <= 10) {
        console.log(`Units 10`)
        totalMin = totalMin + 1
        currentCharge = currentCharge + 10;
        console.log(`charge ${currentCharge}% in ${totalMin} minutes `)

    }
    if (currentCharge >= 11 && currentCharge <= 230) {
        updateVariables(computeCharge(5, currentCharge, dst, 230, totalMin))


    }
    if (currentCharge >= 231 && currentCharge <= 559) {
        updateVariables(computeCharge(8, currentCharge, dst, 559, totalMin))
    }
    if (currentCharge >= 560 && currentCharge <= 1009) {
        updateVariables(computeCharge(2, currentCharge, dst, 1009, totalMin))
    }
    if (currentCharge >= 1010 && currentCharge <= 5000) {
        updateVariables(computeCharge(7, currentCharge, dst, 5000, totalMin))
    }
    if (currentCharge >= 5001 && currentCharge <= 10000) {
        updateVariables(computeCharge(8, currentCharge, dst, 10000, totalMin))
    }
    if (currentCharge >= 10001 && currentCharge <= Math.pow(10, 9)) {
        updateVariables(computeCharge(3, currentCharge, dst, Math.pow(10, 9), totalMin))
    }
    return totalMin

}

console.log(`total time taken to charge : ${mobileCharge(258, 900)}`)