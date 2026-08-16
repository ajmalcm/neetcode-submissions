class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // checkInclusion(s1, s2) {

    //     if (s1.length > s2.length) return false;

    //     const target = new Map();

    //     for (const c of s1) {
    //         target.set(c, (target.get(c) || 0) + 1);
    //     }

    //     const windowSize = s1.length;

    //     for (let l = 0; l <= s2.length - windowSize; l++) {

    //         const current = new Map(target);

    //         const str = s2.slice(l, l + windowSize);

    //         for (const c of str) {

    //             if (!current.has(c)) {
    //                 break;
    //             }

    //             current.set(c, current.get(c) - 1);
    //         }

    //         let valid = true;

    //         for (const value of current.values()) {
    //             if (value !== 0) {
    //                 valid = false;
    //                 break;
    //             }
    //         }

    //         if (valid) return true;
    //     }

    //     return false;
    // }

    // checkInclusion(s1,s2)
    // {
    //     if (s1.length>s2.length)
    //     return false;

    //     let s1Count=new Array(26).fill(0);
    //     let s2Count=new Array(26).fill(0);

    //     for(let i=0;i<s1.length;i++)
    //     {
    //         s1Count[s1.charCodeAt(i)-97]++;
    //         s2Count[s2.charCodeAt(i)-97]++;
    //     }

    //     let matches=0;
    //     for(let i=0;i<26;i++)
    //     {
    //         if(s1Count[i]===s2Count[i])
    //         matches++;
    //     }

    //     let l=0;
    //     for(let r=s1.length;r<s2.length;r++)
    //     {
    //         if(matches==26)
    //         return true;

    //         //adding new right character to window
    //         let index=s2.charCodeAt(r)-97;
    //         s2Count[index]++;

    //         if(s2Count[index]===s1Count[index])
    //         matches++;
    //         else if(s2Count[index]===s1Count[index]+1)
    //         matches--;

    //         //removing old left charactre form the window
    //          index=s2.charCodeAt(l)-97;
    //         s2Count[index]--;

    //         if(s2Count[index]==s1Count[index])
    //         matches++;
    //         else if(s2Count[index]===s1Count[index]-1)
    //         matches--;

    //         l++;

    //     }

    // return matches==26;
    // }

    checkInclusion(s1,s2)
    {
        if(s1.length > s2.length)
        return false;

        let s1Count=new Array(26).fill(0);
        let s2Count=new Array(26).fill(0);

        for(let i=0;i<s1.length;i++)
        {
            s1Count[s1.charCodeAt(i)-97]++;
            s2Count[s2.charCodeAt(i)-97]++;
        }

        let matches=0;
        for(let i=0;i<26;i++)
        {
            if(s1Count[i]===s2Count[i])
            matches++;
        }

        let l=0;
        for(let r=s1.length;r<s2.length;r++)
        {
            if(matches===26)
            return true;

            let index=s2.charCodeAt(r)-97;
            s2Count[index]++;

            if(s2Count[index]==s1Count[index])
            matches++;
            else if(s2Count[index]==s1Count[index]+1)
            matches--;

            index=s2.charCodeAt(l)-97;
            s2Count[index]--;

            if(s2Count[index]==s1Count[index])
            matches++;
            else if(s2Count[index]==s1Count[index]-1)
            matches--;

            l++;

        }

        return matches==26;

    }
}