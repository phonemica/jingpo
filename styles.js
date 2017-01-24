'use strict';

var React = require('react-native');

var {
	StyleSheet,
} = React;

const scriptFont = "phake";

module.exports = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: 0,
		paddingBottom: 0
	},
	pagecontainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		margin: 0,
		padding: 14
	},
	radiotext: {
		fontSize: 16
	},
	listview: {
		backgroundColor: '#FEFCF9',
		paddingLeft: 14,
		paddingRight: 14,
	},
	textinput: {
		height: 40,
		fontSize: 20
	},
	row: {
		flex: 1,
		padding: 0,
		borderBottomWidth: 0.5,
		borderColor: "#dddddd",
		overflow: 'hidden'
	},
	pos: {
		color: "#777777",
		fontStyle: 'italic',
		fontSize: 18
	},
	phonemic: {
		color: "#777777",
		fontSize: 18
	},
	notes: {
		color: "#666666",
		fontSize: 18
	},
	snippet: {
		fontSize: 18,
		color: "#444444"
	},
	def: {
		fontSize: 18,
		color: "#444444"
	},
	defentryapage: {
		fontSize: 19,
		color: "#444444",
		lineHeight: 28
	},
	hindi: {
		fontSize: 24,
		color: "#444444",
		fontFamily: 'hindi',
		lineHeight: 30
	},
	assamese: {
		fontSize: 20,
		color: "#444444",
		fontFamily: 'Boishkhi',
		lineHeight: 30
	},
	headword: {
		fontWeight: 'bold',
		fontSize: 20,
		color: "#555555"
	},
	title: {
		color: '#FDFDFD',
		fontSize: 20
	},
	titlescript: {
		color: '#FDFDFD',
		fontSize: 20,
		//fontFamily: scriptFont
	}
});
