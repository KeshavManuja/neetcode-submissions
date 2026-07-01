class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        let left = 0;
        let right = people.length-1;
        people.sort((a,b) => a-b);
        let boats = 0
        while (left <= right) {
            let weightsSum = people[left] + people[right];
            if(left < right && weightsSum <= limit) {
                left++
            } 
            boats++
            right--
        }
        return boats

    }
}
