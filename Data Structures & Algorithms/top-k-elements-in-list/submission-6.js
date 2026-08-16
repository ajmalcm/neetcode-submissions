class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent = function(nums, k) {
    let map=new Map();
    const result=[];
    for(let i=0;i<nums.length;i++)
    {
        if(map.has(nums[i]))
        {
            map.set(nums[i],(map.get(nums[i])||0)+1)
        }
        else
        map.set(nums[i],1)
    }
   [...map.entries()].sort((a,b)=>a[1]-b[1]).slice(-k).map((item)=>
   {
    result.push(item[0])
   });

   return result;
};
}
