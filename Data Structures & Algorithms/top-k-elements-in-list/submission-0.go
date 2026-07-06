
func topKFrequent(nums []int, k int) []int {

    freq := map[int]int{}

    for _, el := range nums {

        freq[el]++

    }

    mappings := [][]int{}

    for key, value := range freq {

        mappings = append(mappings, []int{value, key})

    }

    sort.Slice(mappings, func(i, j int) bool {

        return mappings[i][0] < mappings[j][0]

    })

    ans := []int{}

    for i := len(mappings) - 1; i >= 0 && len(ans) < k; i-- {

        ans = append(ans, mappings[i][1])

    }

    return ans

}