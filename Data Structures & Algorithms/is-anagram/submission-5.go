func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	hashS, hashT := map[byte] int {}, map[byte] int {}

	for i:=0; i< len(s); i++ {
		hashS[s[i]]++
	}
	for i:=0; i< len(t); i++ {
		hashT[t[i]]++
	}

	for key, _ := range hashS {
		if _ ,exists := hashT[key]; !exists {
			return false
		}
		if hashS[key] != hashT[key] {
			return false
		}
	}

	return true
	
}
