/* Problem 6.2 Spiral Order Matrix II
Problem Description Given a matrix of m * n elements (m rows, n columns), 
return allelements of the matrix in spiral order.
Example: Given the following matrix: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
You should return[1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

 
function spiralOrder(matrix)
{
	let ans = [];

		if (matrix.length == 0)
			return ans;

		let R = matrix.length, C = matrix[0].length;
		let seen = new Array(R);
		for(let i=0;i<R;i++)
		{
			seen[i]=new Array(C);
			for(let j=0;j<C;j++)
			{
				seen[i][j]=false;
			}
		}
		
		let dr = [ 0, 1, 0, -1 ];
		let dc = [ 1, 0, -1, 0 ];
		let r = 0, c = 0, di = 0;

		// Iterate from 0 to R * C - 1
		for (let i = 0; i < R * C; i++) {
			ans.push(matrix[r]);
			seen[r] = true;
			let cr = r + dr[di];
			let cc = c + dc[di];

			if (0 <= cr && cr < R && 0 <= cc && cc < C
				&& !seen[cr][cc]) {
				r = cr;
				c = cc;
			}
			else {
				di = (di + 1) % 4;
				r += dr[di];
				c += dc[di];
			}
		}
		console.log(a);
		return ans;
}
let a=[[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],
[ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
spiralOrder(a);