class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // for(let i=0;i<matrix.length;i++)
        // {
        //     for(let j=0;j<matrix[i].length;j++)
        //     {
        //         if(matrix[i][j]===target)
        //         return true;
        //     }
        // }
        // return false;

        let rows=matrix.length;
        let cols=matrix[0].length;

        let l=0;
        let r=(rows*cols)-1;

        while(l<=r)
        {
            let mid=Math.floor((l+r)/2);
            let row=Math.floor(mid/cols);
            let col=mid%cols;
            if(matrix[row][col]===target)
            return true

            if(matrix[row][col]>target)
            r=mid-1
            else
            l=mid+1
        }
        return false;
    }
}
