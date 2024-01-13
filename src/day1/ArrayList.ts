export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    private data: T[];

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.data = new Array(this.capacity);
    }

    private increaseCapacity(): void {
        const newCapacity = this.capacity * 2;
        const newData = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
        this.capacity = newCapacity;
    }

    prepend(item: T): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = item;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }
        for (let i = this.length - 1; i >= idx; i--) {
            this.data[i + 1] = this.data[i];
        }
        this.data[idx] = item;
        this.length = idx + 1;
    }

    append(item: T): void {
        if (this.length === this.capacity) {
            this.increaseCapacity();
        }
        this.data[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        let foundElement: T | undefined;

        for (let i = 0; i < this.length; i++) {
            if (foundElement) {
                this.data[i - 1] = this.data[i];
            } else if (this.data[i] === item) {
                foundElement = this.data[i];
            }
        }

        if (foundElement) {
            this.length--;
        }

        return foundElement;
    }

    get(idx: number): T | undefined {
        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) {
            return;
        }
        const element = this.data[idx];
        for (let i = idx; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return element;
    }
}
