class Node<T> {
    public val: T;
    public next: Node<T> | undefined;
    public prev: Node<T> | undefined;

    constructor(v: T) {
        this.val = v;
    }
}

export default class SinglyLinkedList<T> {
    public length: number = 0;
    private _head: Node<T | undefined> | undefined;

    constructor() {}

    prepend(item: T): void {
        const current_head = this._head;
        this._head = new Node(item);
        ++this.length;

        if (current_head) {
            this._head.next = current_head;
        }
    }
    insertAt(item: T, idx: number): void {
        let node: Node<T | undefined>;
        if (this._head) {
            node = this._head;
        } else {
            node = new Node(idx === 0 ? item : undefined);
            ++this.length;
            this._head = node;
        }

        for (let i = 0; i < idx; ++i) {
            // Next node is the target
            if (i === idx - 1) {
                const current_next = node.next;
                node.next = new Node(item);
                ++this.length;
                node.next.next = current_next;
            } else if (!node.next) {
                node.next = new Node(undefined);
                ++this.length;
                node = node.next;
            } else {
                node = node.next;
            }
        }
    }
    append(item: T): void {
        this.insertAt(item, this.length);
    }
    remove(item: T): T | undefined {
        let node = this._head;
        if (node?.val === item) {
            return this._removeHead()?.val;
        }

        for (let i = 0; i < this.length; ++i) {
            if (!node) {
                return undefined;
            }
            if (node.next?.val === item) {
                const next = this._removeNext(node);
                return next?.val;
            }
            node = node.next;
        }
        return undefined;
    }
    private _get(idx: number): Node<T | undefined> | undefined {
        let node: Node<T | undefined> | undefined = this._head;

        for (let i = 0; i <= idx; ++i) {
            if (!node) {
                return undefined;
            }
            if (i === idx) {
                return node;
            }
            node = node.next;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        return this._get(idx)?.val;
    }
    private _removeNext(
        node: Node<T | undefined> | undefined,
    ): Node<T | undefined> | undefined {
        if (!node) return;

        const target = node.next;

        if (!target) return;

        const newNext = target?.next;
        target.next = undefined;
        node.next = newNext;

        --this.length;

        return target;
    }
    private _removeHead(): Node<T | undefined> | undefined {
        const head = this._head;

        if (head) {
            this._head = head.next;
            --this.length;
            return head;
        }
        return;
    }
    removeAt(idx: number): T | undefined {
        if (idx === 0) return this._removeHead()?.val;

        const prev = this._get(idx - 1);

        const next = this._removeNext(prev);

        return next?.val;
    }
}
