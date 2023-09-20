function validateDynamicRouteName(dirName) {
  const isValid = dirName.match(/^\[\s*\S.*\S\s*\]$/gi);
  return isValid && isValid[0];
}

export { validateDynamicRouteName };
