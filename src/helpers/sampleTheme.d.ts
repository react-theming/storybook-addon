export function createTheme<T extends {} = {}>(
  theme: T,
): {
  main: string;
  textColor: string;
  backgroundColor: string;
} & T;
