class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map={};
        for(let i=0;i<nums.length;i++)
        {
        let temp=target-nums[i];
            if(map.hasOwnProperty(temp))
            return [map[temp],i];
            else
            map[nums[i]]=i
        }
    return false
    }
}
