class MinStack {
    constructor() {
        this.stack=[];
        this.minStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length===0)
        {
            // this.stack.push(val);
            this.minStack.push(val);
        }
        else
        {
            let minVal=Math.min(this.minStack[this.minStack.length-1],val);
            this.minStack.push(minVal)
        }
            this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1]
    }
}
