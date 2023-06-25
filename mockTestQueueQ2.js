class Queue {
  constructor() {
    this.queueArray = [];
  }

  enqueue(element) {
    this.queueArray.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty. Cannot dequeue an element.";
    }
    return this.queueArray.shift();
  }

  isEmpty() {
    return this.queueArray.length === 0;
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: Queue is empty. Cannot dequeue an element.
