const graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
};

let count = 0;
let visited = new Set();
let largest = 0
const largestComponent = (graph) => {
    for (let node in graph) {
        let size = explore(graph, node, visited)
        if (size > largest) largest = size

    }
    return largest;
};

const explore = (graph, src, visited) => {
    if (visited.has(String(src))) return 0;
    visited.add(String(src));

    let size = 1
    for (let neighbor of graph[src]) {
        size = size + explore(graph, neighbor, visited);
    }

    return size;
};

console.log(largestComponent(graph));