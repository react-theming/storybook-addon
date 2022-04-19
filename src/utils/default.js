export const defaultSnippet = selectedValue => {
  const { namespace, name } = selectedValue;
  const path = namespace.join('.');
  const fullPath = `${path}.${name}`;
  const themeProp = `\${({ theme }) => theme.${fullPath}}`;
  return themeProp;
};
