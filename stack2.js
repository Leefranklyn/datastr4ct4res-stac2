let arrayX = [];

const base = arrayX.length;
console.log(base);

const size = arrayX.length;
console.log(size);

const emptyArray = () => {
  if (base === 0) {
    console.log('The array is empty');
  }
};
emptyArray();

const fullArray = () => {
  if (size === base) {
    console.log('The array is full');
  }
};
fullArray();

const pushToArray = () => {
  if (size === base) {
    console.log('The array is full');
  } else {
    base += 1;
    return base;
  }
};
pushToArray();

const popFromArray = () => {
  if (base === 0) {
    console.log('Array is empty, cannot pop');
  } else {
    console.log('Can be popped from the array');
    base -= 1;
    console.log(base);
    return base;
  }
};
popFromArray();

const searchArray = (item) => {
  if (base === 0) {
    console.log('Array is empty, cannot search');
  } else {
    console.log('Can search from the array');
    const index = arrayX.indexOf(item);
    if (index !== -1) {
      arrayX.splice(index, 1);
    }
    size = arrayX.length;
    return size;
  }
};
searchArray();

const clearArray = () => {
  if (base === 0) {
    console.log('Array is empty, cannot clear');
  } else {
    console.log('The array has been cleared');
    arrayX = [];
    size = arrayX.length;
    return size;
  }
};
clearArray();

const pickFromArray = (item) => {
  if (base === 0) {
    console.log('Array is empty, cannot pick');
  } else {
    console.log('Can pick from the array');
    const index = arrayX.indexOf(item);
    if (index !== -1) {
      arrayX.splice(index, 1);
    }
    size = arrayX.length;
    return size;
  }
};
pickFromArray();

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty. Cannot pop.';
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty, no item.';
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}

const myStack = new Stack();
myStack.push('monday');
myStack.push('tuesday');
myStack.push('wednesday');
myStack.push('thursday');
myStack.push('friday');
myStack.push('saturday');

console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
myStack.clear();
console.log(myStack.isEmpty());
