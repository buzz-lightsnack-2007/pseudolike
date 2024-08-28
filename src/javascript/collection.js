/*
IPseudoADS Queue
Pseudocode-like collection management for JavaScript

by buzz-ligthsnack-2007
*/

class Collection {
  #contents = [];
  #cursor = -1;

  /*
  Create a new collection.
  */
  constructor() {};

  /*
  Add an item to the end of the collection.

  @param {Object} data the data to be added
  */
  addItem(data) {
    this.#contents.push(data);
  };

  /*
  Reset cursor to be to the start of the collection.
  */
  resetNext() {
    this.#cursor = -1;
  };

  /*
  Test: next item exists.

  @return {bool} existence of the item
  */
  hasNext() {
    return(this.#contents.length <= (this.#cursor + 1))
  };

  /*
  Get the next item of the queue.

  @return {Object} the next item
  */
  getNext() {
    this.#cursor++;
    return(this.#contents[this.#cursor]);
  };

  /*
  Test: collection contains no elements

  @return {bool} test result
  */
  isEmpty() {
    return(this.#contents.length <= 0);
  }
}


export {Collection as default};
