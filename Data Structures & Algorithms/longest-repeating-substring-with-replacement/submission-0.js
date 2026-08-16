class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      let longest=0;
      let l=0;
      let map=new Map();
      for(let r=0;r<s.length;r++)
      {
         map.set(s[r],(map.get(s[r])||0)+1)
         while((r-l+1)-Math.max(...map.values())>k)
         {
            map.set(s[l],(map.get(s[l])-1))
            l++
         }
            longest=Math.max(longest,r-l+1);
      }
   return longest;

    }
}
