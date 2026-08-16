class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map=new Map();
        for(let i of nums)
        {
            if(map.has(i))
            map.set(i,map.get(i)+1);
            else
            map.set(i,1);
        }

        return [...map].sort((a,b)=>b[1]-a[1]).slice(0,k).map(item=>item[0]);


    }
}
