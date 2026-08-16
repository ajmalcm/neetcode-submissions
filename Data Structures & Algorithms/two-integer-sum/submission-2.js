class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen=new Map();
        for(let i=0;i,nums.length;i++)
        {
            let compliment=target-nums[i];
            if(seen.has(compliment))
            return [i,seen.get(compliment)]
            else
            seen.set(nums[i],i)
        }
        return null
    }
}
