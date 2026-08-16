class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // isValidSudoku(board) {
    //     //for each row
    //     for(let row=0;row<9;row++)
    //     {
    //         let seen=new Set();
    //         for(let col=0;col<9;col++)
    //         {
    //             if(board[row][col]===".")
    //             continue;

    //             if(seen.has(board[row][col]))
    //             return false
    //             else
    //             seen.add(board[row][col])
    //         }
    //     }

    //     //for each col

    //     for(let col=0;col<9;col++)
    //     {
    //         let seen=new Set();
    //         for(let row=0;row<9;row++)
    //         {
    //             if(board[row][col]===".")
    //             continue
    //             if(seen.has(board[row][col]))
    //             return false
    //             else
    //             seen.add(board[row][col])
    //         }
    //     }

    //     for(let square=0;square<9;square++)
    //     {
    //         let seen=new Set();
    //         for(let i=0;i<3;i++)
    //         {
    //             for(let j=0;j<3;j++)
    //             {
    //                 let row=Math.floor(square/3)*3+i;
    //                 let col=Math.floor(square%3)*3+j;

    //                 if(board[row][col]===".")
    //                 continue
    //                 if(seen.has(board[row][col]))
    //             return false
    //             else
    //             seen.add(board[row][col])
    //             }
    //         }
    //     }

    //     return true;

    // }

    isValidSudoku(board)
    {
        let rows=Array.from({length:9},()=>new Set());
        let cols=Array.from({length:9},()=>new Set());
        let square=Array.from({length:9},()=>new Set());
        for(let r=0;r<9;r++)
        {
            for(let c=0;c<9;c++)
            {
                let val=board[r][c];
                if(val===".")
                continue;

                let boxIndex=Math.floor(r/3)*3+Math.floor(c/3);

                if(rows[r].has(val)||cols[c].has(val)||square[boxIndex].has(val))
                return false;

                rows[r].add(val);
                cols[c].add(val);
                square[boxIndex].add(val);
            }
        }
        return true;
    }
}
