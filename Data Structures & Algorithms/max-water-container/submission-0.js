class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
            let area=0
        for(let i=0;i<heights.length;i++)
        {
            for(let j=i+1;j<heights.length;j++)
            {
                let h=Math.min(heights[i],heights[j]);
                let w=j-i;
                let res=h*w;

                if(res>area)
                area=res;
            }
        }
        return area;
    }
}
