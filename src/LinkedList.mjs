import Node from './Node.mjs';

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let temp = null;
    if (this.head != null) temp = this.head;
    this.head = new Node(value);
    this.head.nextNode = temp;
  }

  append(value) {
    if (!this.head) {
      this.prepend(value);
    } else {
      let temp = this.head;
      while (temp.nextNode != null) {
        temp = temp.nextNode;
      }
      temp.nextNode = new Node(value);
    }
  }

  size() {
    let size = 0;
    let temp = this.head;
    while (temp != null) {
      size++;
      temp = temp.nextNode;
    }
    return size;
  }

  listHead() {
    return this.head;
  }

  listTail() {
    let temp = this.head;
    while (temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  pop() {
    let current = this.head;
    let previous = null;
    while (current.nextNode != null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  contains(value) {
    let temp = this.head;
    while (temp != null) {
      if (temp.value == value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.head;
    let index = 0;
    while (temp != null) {
      index++;
      if (temp.value == value) return index;
      temp = temp.nextNode;
    }
  }
}

  toString() {
    let temp = this.head;
    let string = '';
    while (temp != null) {
      string += `[${temp.value}]->`;
      temp = temp.nextNode;
    }
    if (temp == null) {
      string += '[null]';
    }
    return string;
  }
}
