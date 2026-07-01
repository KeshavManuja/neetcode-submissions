func getConcatenation(nums []int) []int {
    ans := nums

	for _, el := range (nums) {
		ans = append(ans, el)
	}

	return ans
}
