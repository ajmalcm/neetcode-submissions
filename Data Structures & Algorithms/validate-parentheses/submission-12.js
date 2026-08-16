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

    // isValid(s)
    // {
    //     let stack=[];
    //     let closeToOpen={
    //         "}":"{",
    //         "]":'[',
    //         ")":"("
    //     }

    //     for(const c of s)
    //     {
    //         if(closeToOpen[c])
    //         {
    //             if(stack.length && closeToOpen[c]===stack[stack.length-1])
    //             {
    //                 stack.pop();
    //             }
    //             else
    //             return false;
    //         }
    //         else
    //         stack.push(c);
    //     }
    //     if(stack.length===0) return true
    //     return false;
    // }

    isValid(s){
        const map={
            ")":"(",
            "]":"[",
            "}":"{"
        }
        let stack=[];

        for(let i of s){
            if(map[i])
            {
            if(stack.length && map[i]===stack[stack.length-1])
            {
                stack.pop();
            }else
            return false;
            }
            else
            stack.push(i);
        }
        return stack.length===0;
    }
}
