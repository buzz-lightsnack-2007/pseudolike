/*
IPseudoADS Stack
Pseudocode-like advanced stack management for JavaScript

by buzz-ligthsnack-2007
*/

class Stack {
  #contents = [];
  #max;

  /*
  Create a new stack.

  @param {int} size stack’s size
  */
  constructor(size) {
    if (size ? size > 0 : false) {
      this.#max = size;
    };
  };

  /*
  Add an item to the top of the stack.

  @param {Object} data the data to be added
  */
  push(data) {
    if ((this.#max != null) ? this.#max == this.#contents.length : false) {
      throw new RangeError();
    } else {
      this.#contents.push(data);
    }
  };

  /*
  Remove and return the object at the top of the stack.

  @return {Object} the data removed
  */
  pop() {
    return(this.#contents.pop());
  };

  /*
  Test: stack contains no elements

  @return {bool} test result
  */
  isEmpty() {
    return(this.#contents.length == 0);
  }
}

export {Stack as default};
