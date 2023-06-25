class Stack {
  constructor() {
    this.stackArray = [];
  }

  push(element) {
    this.stackArray.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop an element.";
    }
    return this.stackArray.pop();
  }

  isEmpty() {
    return this.stackArray.length === 0;
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: Stack is empty. Cannot pop an element.
