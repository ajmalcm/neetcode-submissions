class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode="";
        for(let str of strs)
        {
            encode+=str.length.toString() + "#" + str
        }
        //"4#neet4#code4#love"
      console.log(encode);
      return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //"4#neet4#code4#love"
        let result=[],temp=str;
        while(temp.length)
        {
            let dIndex=temp.indexOf("#");
            let strLength=Number(temp.slice(0,dIndex));
            let elem=temp.slice(dIndex+1,strLength+1+dIndex);
            result.push(elem);
            temp=temp.slice(strLength+1+dIndex);
        }
        return result;
    }
}
