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
}
