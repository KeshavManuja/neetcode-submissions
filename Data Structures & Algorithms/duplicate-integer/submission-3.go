func hasDuplicate(nums []int) bool {
    maping := map[int] int {}

	for _, el := range nums {
		if _, exists := maping[el]; exists {
			return true
		} else {
			maping[el]++
		}
	}
	return false
}
