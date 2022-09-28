/* Best time to buy and sell stock
  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock andchoosing a 
  different day in the future to sell that stock.
  Return the maximum profit youcan achieve from this transaction. 
  If you cannot achieve any profit, return 0.

  Example 1: 
  Input: prices = [7,1,5,3,6,4] 
  Output: 5 Explanation: Buy on day 2 (price = 1)and sell on day 5 (price = 6), profit = 6-1 = 5. 
  Note that buying on day 2 and selling onday 1 is not allowed because you must buy before you sell. 
  
  Example 2: Input: prices =[7,6,4,3,1] 
  Output: 0 Explanation: In this case, no transactions are done and the maxprofit = 0 
  Constraints: 1 <= prices.length <= 105 0 <= prices[i] <= 104

*/

function maxProfit( price, start, end)
{

	// If the stocks can't be bought
	if (end <= start)
		return 0;

	// Initialise the profit
	let profit = 0;

	// The day at which the stock
	// must be bought
	for (let i = start; i < end; i++) {

		// The day at which the
		// stock must be sold
		for (let j = i + 1; j <= end; j++) {

			// If buying the stock at ith day and
			// selling it at jth day is profitable
			if (price[j] > price[i]) {

				// Update the current profit
				let curr_profit = price[j] - price[i]
								+ maxProfit(price, start, i - 1)
								+ maxProfit(price, j + 1, end);

				// Update the maximum profit so far
				profit = Math.max(profit, curr_profit);
			}
		}
	}
	return profit;
}
	let price = [7,6,4,3,1];
	let n = price.length;

	console.log(maxProfit(price, 0, n - 1));