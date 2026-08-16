class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // productExceptSelf(nums) {
    //     let result=[];
    //     let zeroCount=0;
    //     let product=1;
    //     for(let i of nums)
    //     {
    //         if(i===0) zeroCount++;
    //         else
    //         product*=i
    //     }
    //     // console.log(product)
    //     for(let j of nums)
    //     {
    //       if(zeroCount>1)
    //       result.push(0);
    //       else if(zeroCount==1)
    //       result.push(j===0?product:0);
    //       else
    //       result.push(product/j)
    //     }

    //     return result;
    // }

    productExceptSelf(nums)
    {
        let n=nums.length;
        let result=new Array(n).fill(1);

        let prefix=1;

        for(let i=0;i<n;i++)
        {
            result[i]=prefix;
            prefix*=nums[i]
        }

        let suffix=1;
        for(let i=n-1;i>=0;i--)
        {
            result[i]*=suffix;
            suffix*=nums[i];
        }
    return result;
    }
}
