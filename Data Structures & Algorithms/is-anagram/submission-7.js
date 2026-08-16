class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // isAnagram(s, t) {
    //     if(s.length!==t.length)
    //     return false;

    //     let count={};

    //     for(let i of s)
    //     {
    //         count[i]=(count[i]||0)+1;
    //     }

    //     for(let j of t)
    //     {
    //         if(!count[j])
    //         return false;
    //         count[j]--;
    //     }

    //     return true;
    // }

    // isAnagram(s, t)
    // {
    //    let ss=s.split("").sort().join("");
    //    let tt=t.split("").sort().join("");
    //    if(ss===tt)
    //    return true;

    //    return false;
    // }

    isAnagram(s,t)
    {
        if(s.length!==t.length)
        return false;

        let count={};
        for(let i of s)
        count[i]=(count[i] || 0)+1;

        for(let j of t)
        {
        if(!count[j])
        return false;
        count[j]--;
        }

        return true;


    }
}
