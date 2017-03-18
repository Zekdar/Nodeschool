function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(subUser => goodUsers.some(goodUser => goodUser.id === subUser.id))
	}
}

module.exports = checkUsersValid