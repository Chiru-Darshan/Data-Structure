// const edges = [
//   ["i", "j"],
//   ["k", "i"],
//   ["m", "k"],
//   ["k", "l"],
//   ["o", "n"],
// ];

const edges = [
  [0, 7],
  [0, 8],
  [6, 1],
  [2, 0],
  [0, 4],
  [5, 8],
  [4, 7],
  [1, 3],
  [3, 5],
  [6, 5],
];

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const undirectedGraph = (edges, nodeA, nodeB) => {
  let graph = buildGraph(edges);
  console.log(graph)
  return hasPath(graph, nodeA, nodeB, new Set());
};



const dfs = (graph, src, dst, visited) => {

  let stack = [src]
  visited.add(String(src))
  while (stack.length > 0) {
    let current = stack.pop()
    if (!(visited.has(current))) {
      visited.add(current)
      if (current == dst) return true
      for (let neighbor of graph[current]) {
        {
          stack.push(neighbor)

        }

      }
    }
  }
  return false
}






const hasPath = (graph, src, dst, visited) => {
  console.log(`${graph} : ${src} : ${dst}`)
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited) === true) {
      return true;
    }
  }

  return false;
};
console.log(undirectedGraph(edges, "7", "5"));