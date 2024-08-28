/*
IPseudoADS
Pseudocode-like advanced data structure management for JavaScript

by buzz-ligthsnack-2007
*/

import Stack from './stack.js';
import Queue from './queue.js';
import Collection from './collection.js';


class IPseudoADS {};
IPseudoADS.Stack = Stack;
IPseudoADS.Queue = Queue;
IPseudoADS.Collection = Collection;

export {IPseudoADS as default};
