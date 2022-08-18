import { colors } from '@mui/material'

const white = "#FFFFFF";
const black = "#000000";

const palette = {
	black,
	white,
	primary: {
		contrastText: white,
		dark: "#112236",
		main: "#274C77",
		light: "#509CF2"
	},
	secondary: {
		contrastText: white,
		dark: "#36424A",
		main: "#A1B5C2",
		light: "#E7ECEF"
	},
	social: {
		facebook: '#3B5998',
		instagram: '#833AB4',
		linkedIn: '#0007B5',
		twitter:  '#1A8CD8',
		whatsapp: '#25D366',
		github: '#211F1F',
		docker: '#0DB7ED',
		behance: '#053EFF',
		dribble: '#EA4C89',
		google: '#DB4A39',
		website: '#0084C8'
	},
	
	success: {
		contrastText: white,
		dark: colors.green[900],
		main: colors.green[600],
		light: colors.green[400]
	},
	info: {
		contrastText: white,
		dark: colors.blue[900],
		main: colors.blue[600],
		light: colors.blue[400]
	},
	warning: {
		contrastText: white,
		dark: colors.orange[900],
		main: colors.orange[600],
		light: colors.orange[400]
	},
	error: {
		contrastText: white,
		dark: colors.red[900],
		main: colors.red[600],
		light: colors.red[400]
	},
	text: {
		primary: colors.blueGrey[900],
		secondary: colors.blueGrey[600],
		link: colors.blue[600]
	},
	icon: colors.blueGrey[600],
	divider: colors.grey[200],
	transparent: "#00000000"
}

export default palette
