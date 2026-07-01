class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        if(n <=0) return 0;
        if(n <=2) return 1
        let fir = 0;
        let sec = 1;
        let th = 1;
        for(let i=3; i<=n ; i++) {
            let curr = fir + sec + th;
            fir = sec
            sec = th;
            th = curr;
        }
        return th
    }
}
