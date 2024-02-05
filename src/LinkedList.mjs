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
}
