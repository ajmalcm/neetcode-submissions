class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result=[];
        let zeroCount=0;
        let sum=1;
        for(let i of nums)
        {
            if(i===0) zeroCount++;
            else
            sum*=i
        }
        // console.log(sum)
        for(let j of nums)
        {
          if(zeroCount>1)
          result.push(0);
          else if(zeroCount==1)
          result.push(j===0?sum:0);
          else
          result.push(sum/j)
        }

        return result;
    }
}
