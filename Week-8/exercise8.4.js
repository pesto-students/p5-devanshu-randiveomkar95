/*
Problem 8.4: 
Find if Path Exists in GraphThere is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n -1 (inclusive). The edges in the graph are represented as a 2D integer array edges
where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertexvi. 
Every vertex pair is connected by at most one edge, and no vertex has an edge toitself.
You want to determine if there is a valid path that exists from vertex source to vertexdestination.
Given edges and the integers n, source, and destination, return true if there is a validpath from source to destination, 
or false otherwise
*/

var V;
var adj;
V = 4;
        adj = new Array();
        for (var i = 0; i < V; i++)
            adj.push(new Array());
     
 
    // function to add an edge to graph
    function addEdge(v , w) {
        adj[v].push(w);
        adj[w].push(v);
    }
 
    // A BFS based function to check whether d is reachable from s.
    function isReachable(s , d) {
        // Base case
        if (s == d)
            return true;
 
        // Mark all the vertices as not visited
        var visited = new Array(V).fill(false);
         
 
        // Create a queue for BFS
        var queue = new Array();
 
        // Mark the current node as visited and enqueue it
        visited[s] = true;
        queue.push(s);
 
        while (queue.length != 0)
        {
         
            // Dequeue a vertex from queue and print it
            s = queue.pop();
            for (var i = 0; i < adj[s].length; i++) {
 
                // If this adjacent node is the destination node,
                // then return true
                if (adj[s][i] == d)
                    return true;
 
                // Else, continue to do BFS
                if (!visited[adj[s][i]]) {
                    visited[adj[s][i]] = true;
                    queue.push(adj[s][i]);
                }
            }
        }
 
        // If BFS is complete without visiting d
        return false;
    }

        addEdge(0, 1);
        addEdge(1, 2);
        addEdge(2, 0);
 
        var u = 1, v = 2;
        if (isReachable(u, v))
            console.log("\n There is a path from " + u + " to " + v);
        else
            console.log("\n There is no path from " + u + " to " + v);
 
