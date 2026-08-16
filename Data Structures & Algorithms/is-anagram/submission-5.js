class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;

        const count={};
        for(const i of s)
        count[i]=(count[i]||0)+1;

        for(const j of t)
        {
            if(!count[j])
            return false
            count[j]=(count[j]||0)-1
        }

        return true;

    }
}
