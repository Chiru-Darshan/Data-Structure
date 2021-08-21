const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const bfs_search = (graph, source) => {
    let queue = [source]
    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}


bfs_search(graph, 'a')