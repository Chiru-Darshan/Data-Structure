const grid = [
    ["W", "L", "W", "W", "W"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "L", "W"],
    ["W", "W", "L", "L", "W"],
    ["L", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "W"],
];





const explore = (grid, r, c, visited) => {
    const pos = r + ',' + c


    const rowInBound = r >= 0 && r < grid.length
    const colInBound = c >= 0 && c < grid[0].length

    if (!rowInBound || !colInBound) return false



    if (grid[r][c] == "W") return false

    if (visited.has(pos)) return false
    visited.add(pos)



    explore(grid, r - 1, c, visited)
    explore(grid, r + 1, c, visited)
    explore(grid, r, c - 1, visited)
    explore(grid, r, c + 1, visited)


    return true
}

const island_count = (grid) => {
    let count = 0
    let visited = new Set()
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (explore(grid, r, c, visited) === true) {
                count = count + 1
            }

        }

    }
    console.log(count)
}

island_count(grid)