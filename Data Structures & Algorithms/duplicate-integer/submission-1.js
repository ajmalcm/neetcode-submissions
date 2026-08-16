class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr) {
        let s1=new Set();
        for(let i=0;i<arr.length;i++)
        {
            if(s1.has(arr[i]))
            return true;
            else
            s1.add(arr[i]);
        }
        return false
    }
}
