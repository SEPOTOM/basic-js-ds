const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {

    if ( !this._head ) {

      return null;

    }

    return this._head;

  }

  enqueue( value ) {

    if ( !this.getUnderlyingList() ) {

      this._head = new ListNode( value );
      return;

    }

    let lastNode = this.getUnderlyingList();

    while ( lastNode.next ) {

      lastNode = lastNode.next;

    }

    lastNode.next = new ListNode( value );

  }

  dequeue() {

    if ( !this.getUnderlyingList() ) {

      return null;

    }

    const value = this._head.value;

    this._head = this._head.next;

    return value;

  }
}

module.exports = {
  Queue
};
