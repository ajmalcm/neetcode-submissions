class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent = function(nums, k) {
    const counter=new Map();
    let result=[];
    for(let i=0;i<nums.length;i++)
    {
        counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    }
     [...counter.entries()].sort((a,b)=>a[1]-b[1]).slice(-k).map((item)=>{
        result.push(item[0])

     })
        return result;
};
}
