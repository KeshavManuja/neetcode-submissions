func groupAnagrams(strs []string) [][]string {
	res := make(map[[26]int][]string)

	for _, str := range strs {
		var count [26] int 
		for _, char := range str {
			count[char - 'a']++
		}
		res[count] = append(res[count], str)
	}

	var result [][]string
	for _, group := range res {
		result = append(result, group)
	}
	return result
}
