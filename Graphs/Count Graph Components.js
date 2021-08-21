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
const connectedComponentsCount = (graph) => {
    for (let node in graph) {
        if (explore(graph, node, visited) === true) {
            count = count + 1;
        }
    }
    return count;
};

const explore = (graph, src, visited) => {
    if (visited.has(String(src))) return false;
    visited.add(String(src));
    for (let neighbor of graph[src]) {
        explore(graph, neighbor, visited);
    }

    return true;
};

console.log(connectedComponentsCount(graph));