import theme from 'theme/mainTheme';

export const modeSwitch = (light, dark) => (theme.palette.type !== 'dark' ? light : dark);

export default { modeSwitch };
