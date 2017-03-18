function getShortMessages(messages) {
	return messages
		.filter(elt => elt.message.length < 50)
		.map(elt => elt.message)
}

module.exports = getShortMessages