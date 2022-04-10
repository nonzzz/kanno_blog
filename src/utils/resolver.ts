export const serialize = (tar: Record<string, any>) => Object.keys(tar)

export const resolver = <T extends string>(tar: Record<string, any>, prop: string, attr: T) => tar[prop][attr]
