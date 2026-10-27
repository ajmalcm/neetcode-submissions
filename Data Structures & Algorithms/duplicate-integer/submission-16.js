class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set=new Set();
        for(let s of nums)
        {
            if(set.has(s))
            return true;
            else
            set.add(s);
        }
        return false;
}
}
