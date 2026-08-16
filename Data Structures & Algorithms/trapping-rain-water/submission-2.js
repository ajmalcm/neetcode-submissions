class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // trap(height) {
    //     // let minLeft=Array(height.length-1).fill(0);
    //     // let minRight=Array(height.length-1).fill(0);
    //     let res=0;
    //     for(let i=0;i<height.length;i++)
    //     {
    //         let leftMax=height[i];
    //         let rightMax=height[i];
    //         for(let j=0;j<i;j++)
    //         {
    //             leftMax=Math.max(leftMax,height[j])
    //         }

    //         for(let k=i+1;k<height.length;k++)
    //         {
    //             rightMax=Math.max(rightMax,height[k])
    //         }

    //         res+=Math.min(leftMax,rightMax)-height[i]

    //     }

    //     return res;


    // }

    // trap(height)
    // {
    //     let res=0;
    //     let n=height.length;
    //     let leftMax=Array(n).fill(0);
    //     let rightMax=Array(n).fill(0);

    //      leftMax[0]=height[0];
    //      rightMax[n-1]=height[n-1];
    //      for(let i=1;i<n;i++)
    //      {
    //         leftMax[i]=Math.max(leftMax[i-1],height[i])
    //      }

    //      for(let j=n-2;j>=0;j--)
    //      {
    //         rightMax[j]=Math.max(rightMax[j+1],height[j])
    //      }

    //      for(let i=0;i<n;i++)
    //      {
    //         res+=Math.min(leftMax[i],rightMax[i])-height[i]
    //      }

    //      return res;

    // }

    trap(height)
    {
        if(!height || height.length==0)
        return 0;

        let res=0;
        let l=0;
        let r=height.length-1;
        let leftMax=height[l];
        let rightMax=height[r]

    while(l<r)
    {
        if(leftMax<rightMax)
        {
            l++
            leftMax=Math.max(leftMax,height[l])
            res+=leftMax - height[l]
        }
        else
        {
            r--;
            rightMax=Math.max(rightMax,height[r]);
            res+=rightMax - height[r]
        }
    }

    return res;
    }
}
