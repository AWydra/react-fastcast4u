import theme from 'theme/mainTheme';

const modeSwitch = (light, dark) => (theme.palette.type !== 'dark' ? light : dark);

export default { modeSwitch };
