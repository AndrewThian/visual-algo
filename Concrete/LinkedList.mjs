class Node {
  constructor(value, next = null) {
    this.element = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * Time complexity: O(n)
   *
   * Best case, current index is head, O(1) operation
   * Worse case, we are inserting at end of list, O(n) operation
   *
   * @param value
   */
  insert(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  remove() {
    let prev, current;
    current = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
  }

  /**
   * Time complexity O(n)
   *
   * Best case, inserting node at head is O(1) operation
   * Worse case, inserting node at tail is O(n) operation
   *
   * @param value
   * @param index
   */
  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      return false;
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // store the prev and next values of the linked list
      let prev, current;
      current = this.head;
      let currentIdx = 0;
      while (currentIdx < index) {
        prev = current;
        current = current.next;
        currentIdx++;
      }
      // set new node pointer to current
      newNode.next = current;
      // set prev node pointer to new node;
      prev.next = newNode;
    }

    this.size++;
  }

  removeAt(index) {}

  print() {
    let current = this.head;
    if (current) {
      while (current.next) {
        console.log(current.element);
        current = current.next;
      }
      // last item
      console.log(current.element);
    }
  }
}

const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(5);

ll.insertAt(4, 3);
ll.insertAt(6, 5);

ll.remove();

ll.print();
