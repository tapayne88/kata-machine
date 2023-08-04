type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        if (this.head === undefined) {
            this.head = { value: item, next: undefined };
            return;
        }

        const newHead = { value: item, next: this.head };
        this.head = newHead;
    }

    pop(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        }

        this.length--;
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
