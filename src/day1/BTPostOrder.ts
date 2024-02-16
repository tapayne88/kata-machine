function walk(node: BinaryNode<number> | null, stack: number[]): void {
    if (node === null) {
        return;
    }

    walk(node.left, stack);
    walk(node.right, stack);
    stack.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const stack: number[] = [];

    walk(head, stack);

    return stack;
}
