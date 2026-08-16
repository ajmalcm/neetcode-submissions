class MinStack {
    constructor() {
        this.stack=[];
        this.min=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length===0)
        {
            this.min.push(val)
        }
        else
        {
            let minVal=Math.min(val,this.min[this.min.length-1])
            this.min.push(minVal)
        }
            this.stack.push(val)

    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        // this.min=this.stack[0];
        // for(let i=0;i<this.stack.length;i++)
        // {
        //     this.min=Math.min(this.min,this.stack[i])
        // }
        // return this.min;

        return this.min[this.min.length-1];
    }
}
