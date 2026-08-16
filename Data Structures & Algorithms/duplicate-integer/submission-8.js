class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(arr) {
    //     let s1=new Set();
    //     for(let i=0;i<arr.length;i++)
    //     {
    //         if(s1.has(arr[i]))
    //         return true;
    //         else
    //         s1.add(arr[i]);
    //     }
    //     return false
    // }
    // hasDuplicate(arr)
    // {
    //     for(let i=0;i<arr.length;i++)
    //     {
    //         for(let j=i+1;j<arr.length;j++)
    //         {
    //             if(arr[i]===arr[j])
    //             return true
    //         }
    //     }
    //     return false
    // }

    hasDuplicate(arr)
    {
        let seen=new Set();
        for(let i=0;i<arr.length;i++)
        {
            if(seen.has(arr[i]))
            return true;
            seen.add(arr[i])
        }
        return false;
    }
}
