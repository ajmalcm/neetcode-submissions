class MinStack {
    constructor() {
        this.stack=[];
        this.min=0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
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
        this.min=this.stack[0];
        for(let i=0;i<this.stack.length;i++)
        {
            this.min=Math.min(this.min,this.stack[i])
        }
        return this.min;
    }
}
