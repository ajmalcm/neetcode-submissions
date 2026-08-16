class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let result=0;
        let charMap=new Map();
        let l=0
        let maxF=0
        for(let r=0; r<s.length; r++)
        {
           charMap.set(s[r],(charMap.get(s[r])||0)+1)
           maxF=Math.max(maxF,charMap.get(s[r]));
            while((r-l+1 - maxF) > k)
            {
                charMap.set(s[l],charMap.get(s[l])-1);
                l++;
            }
            result=Math.max(result,r-l+1);
        }
        return result;
    }
}
