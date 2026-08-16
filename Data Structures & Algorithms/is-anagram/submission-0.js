class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    //     if(s.length!==t.length)
    //     return false
    //     else {
    //         let ss=s.split("").sort().join("");
    //         let st=t.split("").sort().join("");
    //         if(ss===st)
    //         return true;
    //     }
    // return false
    // }

    const count={};
    if(s.length!==t.length)
    return false
    for(const i of s)
    {
        count[i]=(count[i]||0)+1;
    }

    for(const j of t)
    {
        if(!count[j])
            return false
        else 
        count[j]--
    }
    return true
}
}
