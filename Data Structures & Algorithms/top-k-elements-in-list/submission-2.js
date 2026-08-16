class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map=new Map();
        let result=[];
        for(let n of nums)
        {
            if(!map.has(n))
            {

                map.set(n,0)
            }
        map.set(n,map.get(n)+1)
        }

        const sorted=[...map.entries()].sort((a,b)=>a[1]-b[1]);
        [...sorted.slice(-k)].map((item)=>
        result.push(item[0]))

    return result;
        
    }
}
