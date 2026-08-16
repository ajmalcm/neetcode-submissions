class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // maxArea(heights) {
    //         let area=0
    //     for(let i=0;i<heights.length;i++)
    //     {
    //         for(let j=i+1;j<heights.length;j++)
    //         {
    //             let h=Math.min(heights[i],heights[j]);
    //             let w=j-i;
    //             let res=h*w;

    //             if(res>area)
    //             area=res;
    //         }
    //     }
    //     return area;
    // }

    maxArea(heights)
    {
        let maxArea=0;
        let l=0;
        let r=(heights.length-1);
        while(l<r)
        {
            let h=Math.min(heights[l],heights[r])
            let w=r-l;
            let area=h*w;
            maxArea=Math.max(area,maxArea)

            if(heights[l]<heights[r])
            l++
            else
            r--
        }

        return maxArea;
    }
}
