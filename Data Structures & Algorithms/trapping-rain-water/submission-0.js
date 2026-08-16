class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // let minLeft=Array(height.length-1).fill(0);
        // let minRight=Array(height.length-1).fill(0);
        let res=0;
        for(let i=0;i<height.length;i++)
        {
            let leftMax=height[i];
            let rightMax=height[i];
            for(let j=0;j<i;j++)
            {
                leftMax=Math.max(leftMax,height[j])
            }

            for(let k=i+1;k<height.length;k++)
            {
                rightMax=Math.max(rightMax,height[k])
            }

            res+=Math.min(leftMax,rightMax)-height[i]

        }

        return res;


    }
}
