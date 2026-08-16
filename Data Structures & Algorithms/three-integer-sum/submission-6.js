class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // threeSum(nums) {
    //     let result=new Set();
    //     nums.sort((a,b)=>a-b)
    //     for(let i=0;i<nums.length;i++)
    //     {
    //         for(let j=i+1;j<nums.length;j++)
    //         {
    //             for(let k=j+1;k<nums.length;k++)
    //             {
    //                 if(nums[i]+nums[j]+nums[k]===0)
    //                 {
    //                     result.add(JSON.stringify([nums[i],nums[j],nums[k]]))
    //                 }
    //             }
    //         }
    //     }
    //     return Array.from(result).map((item)=>JSON.parse(item))
    // }

    // threeSum(nums)
    // {
    //     let res=[];
    //     nums.sort((a,b)=>a-b)
    //     for(let i=0;i<nums.length;i++)
    //     {
    //         if(i>0 && nums[i]===nums[i-1])
    //         continue;
    //         let l=i+1;
    //         let r=nums.length-1;
    //         while(l<r)
    //         {
    //         let sum=nums[i]+nums[l]+nums[r]
    //         if(sum>0)
    //         r--;
    //         else if(sum<0)
    //         l++;
    //         else
    //         {
    //         res.push([nums[i],nums[l],nums[r]])
    //         l++;
    //         // r--;

    //         while(l<r && nums[l]===nums[l-1])
    //         {
    //             l++;
    //         }
    //         }
    //         }

    //     }

    //     return res;
    // }

    // threeSum(nums)
    // {
    //     let n=nums.length;
    //     nums.sort((a,b)=>a-b);
    //     let result=new Set();
    //     for(let i=0;i<n;i++)
    //     {
    //         for(let j=i+1;j<n;j++)
    //         {
    //             for(let k=j+1;k<n;k++)
    //             {
    //                 if(nums[i]+nums[j]+nums[k]===0)
    //                 {
    //                     result.add(JSON.stringify([nums[i],nums[j],nums[k]]));
    //                 }
    //             }
    //         }
    //     }

    //     return Array.from(result).map(item=>JSON.parse(item));
    // }

    threeSum(nums)
    {
        let result=[];
        nums.sort((a,b)=>a-b);
        for(let i=0;i<nums.length;i++)
        {
            if(i>0 && nums[i]===nums[i-1])
            continue;

            let l=i+1; //we are keeping ith value as a fixed(firts item) item in the triplet set
            let r=nums.length-1;

            while(l<r)
            {
                let sum=nums[i]+nums[l]+nums[r];

                if(sum>0)
                r--;
                else if(sum<0)
                l++;
                else
                {
                    result.push([nums[i],nums[l],nums[r]]);
                    r--;

                    while(l<r && nums[r]===nums[r+1]) //check to avoid duplicate values
                    r--;
                }
            }
        }
        return result;
    }
}
