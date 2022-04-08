export const camlize = (str: string) => str.replace(/-(\w)/g, (_, $1) => $1.toUpperCase())
