async function loadConfig() {
  const theme = await import('./theme.mjs');
  const hour = new Date().getHours();

  if (hour < 18) {
    theme.setLightTheme();
  } else {
    theme.setDarkTheme();
  }
}

loadConfig();