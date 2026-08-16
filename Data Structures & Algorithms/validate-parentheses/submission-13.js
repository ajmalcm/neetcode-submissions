class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  

    isValid(s){
        const map={
            ")":"(",
            "]":"[",
            "}":"{"
        }
        let stack=[];

        for(let i of s){
            if(map[i])
            {
            if(stack.length && map[i]===stack[stack.length-1])
            {
                stack.pop();
            }else
            return false;
            }
            else
            stack.push(i);
        }
        return stack.length===0;
    }
}
