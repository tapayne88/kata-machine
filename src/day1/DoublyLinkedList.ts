type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item };

        this.length++;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;

        const curr = this.getAt(idx);

        const node: Node<T> = { value: item };
        node.next = curr;

        if (curr?.prev) {
            node.prev = curr.prev;
            curr.prev = node;
            node.prev.next = node;
        }
    }

    append(item: T): void {
        if (!this.tail) {
            this.prepend(item);
            return;
        }

        const node: Node<T> = { value: item };

        this.length++;

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        if (!this.head) {
            return;
        }

        let curr: Node<T> | undefined = this.head;
        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }
        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.head) {
            return;
        }

        const curr = this.getAt(idx);

        if (!curr) {
            return;
        }

        return this.removeNode(curr);
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr: Node<T> | undefined = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            this.head = undefined;
            this.tail = undefined;
            return node.value;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (this.head === node) {
            this.head = node.next;
        }
        if (this.tail === node) {
            this.tail = node.prev;
        }

        return node.value;
    }
}
