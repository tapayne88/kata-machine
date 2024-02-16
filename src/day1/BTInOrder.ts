function walk(node: BinaryNode<number> | null, stack: number[]): void {
    if (node === null) {
        return;
    }

    walk(node.left, stack);
    stack.push(node.value);
    walk(node.right, stack);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const stack: number[] = [];

    walk(head, stack);

    return stack;
}
