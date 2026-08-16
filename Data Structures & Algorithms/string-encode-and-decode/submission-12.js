class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let str="";
       for(let s of strs)
       {
        str+=s.length + "#" + s;
       }
       return str;

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res=[];
        let i=0;
        while(i<str.length)
        {
            let j=i;
            while(str[j]!=="#")
            j++;

            let length=Number(str.slice(i,j));
            let word=str.slice(j+1,j+1+length);
            res.push(word);

            i=j+1+length;
        }

    return res
    }
}
