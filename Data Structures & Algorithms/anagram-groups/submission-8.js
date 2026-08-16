class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs) {
    //     var temp=[];
    //     let sorted=strs.sort();

    //     for(let i=0;i<strs.length;i++)
    //     {
    //         for(let j=i+1;j<strs.length;j++)
    //         {
    //             if(sorted[i]===sorted[j])
    //             temp[i]=[sorted[i]]
    //             else
    //             continue
    //         }
    //     }
    // return temp;
    // }


    // groupAnagrams(strs)
    // {
    //     // let temp=[];
    //     // let sorted=strs.sort();

    //     // for(let i=0;i<sorted.length;i++)
    //     // {
    //     //     for(let j=i+1;j<sorted.length;j++)
    //     //     {
    //     //         if(sorted[i]===sorted[j])
    //     //         temp[i]=[...temp[i],sorted[i]]
    //     //         else
    //     //         continue
    //     //     }
    //     // }
    //     // return temp;
    //     let map=new Map();
    //     for(let i=0;i<strs.length;i++)
    //     {
    //         let ss=strs[i].split("").sort().join("");
    //         if(map.has(ss))
    //         map.get(ss).push(strs[i]);
    //         else
    //         map.set(ss,[strs[i]])
    //     }

    //     return [...map.values()];
    // }

    groupAnagrams(strs)
    {
        let map=new Map();
        for(let str of strs)
        {
            let ss=str.split("").sort().join("");
            if(map.has(ss))
            {
                map.get(ss).push(str);
            }
            else
            map.set(ss,[str]);
        }
        return [...map.values()];
    }


}
