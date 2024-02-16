function walk(node: BinaryNode<number> | null, stack: number[]): void {
    if (node === null) {
        return;
    }

    stack.push(node.value);
    walk(node.left, stack);
    walk(node.right, stack);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const stack: number[] = [];

    walk(head, stack);

    return stack;
}
