module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{ts,scss,ico}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};