class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     let map={};
    //     for(let i=0;i<nums.length;i++)
    //     {
    //         if(map.hasOwnProperty(nums[i]))
    //         return true
    //         else
    //         map[nums[i]]=true;
    //     }
    //     return false
    // }

   hasDuplicate=(nums)=>{
    let S1=new Set();

    for(let i=0;i<nums.length;i++)
    {
        if(S1.has(nums[i]))
        return true;
        else S1.add(nums[i])

    }
        return false;
}
}
