const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const dfs_search = (graph, src, dst) => {
    if (src === dst) {
        return true;
    }
    for (let neighbor of graph[src]) {
        if ((dfs_search(graph, neighbor, dst)) === true) {
            return true
        }
    }
    return false

}


const bfs_search = (graph, src, dst) => {
    let queue = [src]
    while (queue.length > 0) {
        const current = queue.shift()
        if (current === dst)
            return true
        else {
            for (let neighbor of graph[current]) {
                queue.push(neighbor)
            }
        }
    }
    return false
}

//console.log(dfs_search(graph, 'f', 'e'))
console.log(bfs_search(graph, 'f', 'e'))