function validateDynamicRouteName(dirName) {
  const isValid = dirName.match(/^\[\s*\S.*\S\s*\]$/gi);
  return isValid[0].replace(/\[|\]/g, "").trim();
}

test("valid dynamic route convention", () => {
  expect(validateDynamicRouteName("[slug]")).toBe("slug");
});
