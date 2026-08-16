class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isValid(s) {
    //    while(s.includes("{}")||s.includes("[]")||s.includes("()"))
    //    {
    //     s=s.replace("{}","");
    //     s=s.replace("[]","");
    //     s=s.replace("()","")
    //    }
    //    return s.length===0;
    // }

    isValid(s)
    {
        let stack=[];
        let closeToOpen={
            "}":"{",
            "]":'[',
            ")":"("
        }

        for(const c of s)
        {
            if(closeToOpen[c])
            {
                if(stack.length && closeToOpen[c]===stack[stack.length-1])
                {
                    stack.pop();
                }
                else
                return false;
            }
            else
            stack.push(c);
        }
        if(stack.length===0) return true
        return false;
    }
}
