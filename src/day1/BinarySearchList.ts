export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const middle_index = Math.floor(lo + (hi - lo) / 2);
        const middle_value = haystack[middle_index];

        if (middle_value === needle) {
            return true;
        } else if (middle_value > needle) {
            hi = middle_index;
        } else {
            lo = middle_index + 1;
        }
    } while (lo < hi);

    return false;
}
