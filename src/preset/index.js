export function config(entry = []) {
  // return [...entry, require.resolve("./preview")]
  return [...entry]
}

export function managerEntries(entry = []) {
  return [...entry, require.resolve("../manager/register")]
}
