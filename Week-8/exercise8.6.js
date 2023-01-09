/*
Problem 8.6: All Path from source to target
Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
find all possiblepaths from node 0 to node n - 1 and return them in any order.
The graph is given as follows:
graph[i] is a list of all nodes you can visit from node i (i.e.,there is a directed edge from node i to node graph[i][j]).
*/

let  v;
let adjList;
 
// A directed graph using
// adjacency list representation
function Graph(vertices)
{
    // initialise vertex count
        v = vertices;
  
        // initialise adjacency list
        initAdjList();
}
 
// utility method to initialise
    // adjacency list
function initAdjList()
{
    adjList = new Array(v);
  
        for (let i = 0; i < v; i++) {
            adjList[i] = [];
        }
}
 
// add edge from u to v
function addEdge(u,v)
{
    // Add v to u's list.
        adjList[u].push(v);
}
 
// Prints all paths from
    // 's' to 'd'
function printAllPaths(s,d)
{
     let isVisited = new Array(v);
     for(let i=0;i<v;i++)
         isVisited[i]=false;
        let pathList = [];
  
        // add source to path[]
        pathList.push(s);
  
        // Call recursive utility
        printAllPathsUtil(s, d, isVisited, pathList);
}
 
function printAllPathsUtil(u,d,isVisited,localPathList)
{
    if (u == (d)) {
            document.write(localPathList);
            // if match found then no need to
            // traverse more till depth
            return;
        }
  
        // Mark the current node
        isVisited[u] = true;
  
        // Recur for all the vertices
        // adjacent to current vertex
        for (let i=0;i< adjList[u].length;i++) {
            if (!isVisited[adjList[u][i]]) {
                // store current node
                // in path[]
                localPathList.push(adjList[u][i]);
                printAllPathsUtil(adjList[u][i], d,
                isVisited, localPathList);
  
                // remove current node
                // in path[]
                localPathList.splice(localPathList.indexOf
                (adjList[u][i]),1);
            }
        }
  
        // Mark the current node
        isVisited[u] = false;
}
 
 // Driver program
// Create a sample graph
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 3);
 
// arbitrary source
let s = 2;
 
// arbitrary destination
let d = 3;
 
console.log(
"Following are all different paths from "
+ s + " to " + d);
printAllPaths(s, d);