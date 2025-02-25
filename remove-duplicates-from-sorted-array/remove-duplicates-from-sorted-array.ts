function removeDuplicates(nums: number[]): number {
    // k starts at 1 since 0th element is always unique
    let k = 1;

    // i starts at 1 because we need to compare w/ previous elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]
            k++;
        }
    }

    return k
};
