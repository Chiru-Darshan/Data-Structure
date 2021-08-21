const dfs = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const dfs_search = (graph, source) => {
    let stack = [source]

    while (stack.length > 0) {
        let current = stack.pop()
        console.log(current)
        for (let neigbour of graph[current]) {
            stack.push(neigbour)
        }
    }
}

const dfs_search_rec = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]) {
        dfs_search_rec(graph, neighbor)
    }
}


dfs_search(dfs, 'a')
dfs_search_rec(dfs, 'a')