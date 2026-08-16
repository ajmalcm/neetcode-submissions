class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false;

        const target = new Map();

        for (const c of s1) {
            target.set(c, (target.get(c) || 0) + 1);
        }

        const windowSize = s1.length;

        for (let l = 0; l <= s2.length - windowSize; l++) {

            const current = new Map(target);

            const str = s2.slice(l, l + windowSize);

            for (const c of str) {

                if (!current.has(c)) {
                    break;
                }

                current.set(c, current.get(c) - 1);
            }

            let valid = true;

            for (const value of current.values()) {
                if (value !== 0) {
                    valid = false;
                    break;
                }
            }

            if (valid) return true;
        }

        return false;
    }
}