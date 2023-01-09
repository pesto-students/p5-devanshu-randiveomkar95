/* Parenthesis Checker
Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
For example,
the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.
*/

function correctPair(expression)
{
    let stack = [];
    for(let i = 0; i < expression.length; i++)
    {
        let x = expression[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}
let expression = "([{}])";
console.log(correctPair(expression) ? 'True' : 'False');