function twoSum(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             console.log(nums[i], nums[j])
    //             return [i, j]
    //         }
    //     }
    // }

    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let newTarget = target - nums[i];

        if (map.has(newTarget)) {
            return [map.get(newTarget), i];
        }

        map.set(nums[i], i);
    }

}

let result = twoSum([1, 2, 3], 5);

console.log(result)
