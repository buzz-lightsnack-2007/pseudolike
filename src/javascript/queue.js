/*
IPseudoADS Queue
Pseudocode-like queue management for JavaScript

by buzz-ligthsnack-2007
*/

class Queue {
  #contents = [];
  #max;

  /*
  Create a new queue.

  @param {int} size stack’s size
  */
  constructor(size) {
    if (size ? size > 0 : false) {
      this.#max = size;
    };
  };

  /*
  Add an item to the end of the queue.

  @param {Object} data the data to be added
  */
  enqueue(data) {
    if ((this.#max != null) ? this.#max == this.#contents.length : false) {
      throw new RangeError();
    } else {
      this.#contents.push(data);
    }
  };

  /*
  Remove and return the object at the top of the queue.

  @return {Object} the data removed
  */
  dequeue() {
    return(this.#contents.shift());
  };

  /*
  Test: queue contains no elements

  @return {bool} test result
  */
  isEmpty() {
    return(this.#contents.length == 0);
  }
}

export {Queue as default};
