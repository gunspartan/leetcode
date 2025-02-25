/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // Start at the end of the arrays
    let midx = m - 1;
    let nidx = n - 1;
    let end = nums1.length - 1;
    
    // Continue loop until all elements from num2 have been merged
    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[end] = nums1[midx];
            midx--;
        } else {
            nums1[end] = nums2[nidx];
            nidx--;
        }

        end--;
    }
};
