const qs = (arr: number[], lo: number, hi: number): void => {
    if (lo >= hi) return;

    const pivot = partition(arr, lo, hi);

    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
};
const partition = (arr: number[], lo: number, hi: number): number => {
    const pivot = arr[hi];

    let idx = lo - 1;

    // [8,3,2,4,5]

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    // [3,2,4,8,5]
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    // [3,2,4,5,8]
    return idx;
};

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
