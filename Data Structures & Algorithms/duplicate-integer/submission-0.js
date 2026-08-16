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

     hasDuplicate (nums) {
        const s1=new Set();
        for(const n of nums)
        {
            if(s1.has(n))
            return true
            else
            s1.add(n)
        }
        return false
    }
}
