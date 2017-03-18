function reduce(arr, fn, initial) {
	
}

function toUpperArray(items) {
	if (!items.length) return []             // end condition
	var head = items[0]                      // item to operate on
	head = head.toUpperCase()                // perform action
	var tail = items.slice(1)                // next
	return [head].concat(toUpperArray(tail)) // recursive step
}

module.exports = reduce