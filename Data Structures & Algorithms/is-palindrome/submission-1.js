class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l=0;
        let r=s.length-1;
        while(l<r)
        {
            while(l<r && !this.isAlNums(s[l]))
            l++;
            while(r>l && !this.isAlNums(s[r]))
            r--;
            if(s[l].toLocaleLowerCase()!==s[r].toLocaleLowerCase())
            return false;

            l++;
            r--;
        }
        return true
    }

    isAlNums(c)
    {
        if(c>='a' && c<= 'z' || c>="A" && c<="Z" || c>="0"&& c<="9")
        {
            return true
        }
        return false;
    }
}
