class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(numbers, target) {
    //     // let map=new Map();
    //     // for(let i=0;i<numbers.length;i++)
    //     // {
    //     //     let compliment=target-numbers[i];
    //     //     if(map.has(compliment))
    //     //     return [map.get(compliment),i+1]

    //     //     map.set(numbers[i],i+1)
    //     // }

    //     let l=0,r=numbers.length-1;

    //     while(l<r)
    //     {
    //         let sum=numbers[l]+numbers[r];
    //         if(sum<target)
    //         {
    //             l++;
    //         }
    //         else if(sum>target)
    //         {
    //             r--;
    //         }

    //         else{
    //         return [l+1,r+1];
    //         }

            
    //     }
    //     return []
    // }

    twoSum(numbers,target)
    {
        let l=0;
       let r=numbers.length-1;
        let res=[];
        while(l<r)
        {
            let sum=numbers[l]+numbers[r];
            if(sum < target)
            l++
            else if(sum > target)
            r--;
            else
                return [l+1,r+1]
        }
        return [];
    }
}
