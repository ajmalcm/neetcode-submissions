class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // isPalindrome(s) {
    //     let newStr="";
    //     for(let c of s)
    //     {
    //         if(this.isAlNum(c))
    //         newStr+=c.toLowerCase();
    //     }

    //     return newStr.split('').reverse().join("")===newStr


    // }

    // isPalindrome(str)
    // {
    //     let l=0;
    //     let r=str.length-1;

    //     while(l<=r)
    //     {
    //         if((this.isAlNum(str[l]) && this.isAlNum(str[r])))
    //         {
    //             if(!(str[l].toLowerCase()==str[r].toLowerCase()))
    //         return false

    //         l++;
    //         r--;
    //         }
    //         else
    //         {
    //             if(!(this.isAlNum(str[l])))
    //             {
    //                 l++
    //             }
    //              if(!(this.isAlNum(str[r])))
    //             {
    //                 r--
    //             }

    //         }
    //     }
    //     return true;
    // }

    isPalindrome(str)
    {
        let l=0;
        let r=str.length-1;

        while(l<r)
        {
            while(l<r && !this.isAlNum(str[l]))
            l++;

            while(l<r && !this.isAlNum(str[r]))
            r--;

            if(str[l].toLowerCase() !== str[r].toLowerCase())
            return false;

            l++;
            r--;
        }
        return true;
    }

    isAlNum(c){
        return(
            (c>='a' && c<='z') ||
            (c>='A' && c<='Z') ||
            (c>='0' && c<='9')
        )
    }

}
