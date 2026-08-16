class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map=new Map();
        for(let item of strs)
        {
            let sortedKey=item.split("").sort().join("");
            if(map.has(sortedKey))
            {
                map.get(sortedKey).push(item);
            }
            else
            {
                map.set(sortedKey,[item])
            }
        }

        return [...map.values()]
    }
}
