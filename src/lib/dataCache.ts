type CACHE_TAG = "users"

export const getGlobalTag = (teg: CACHE_TAG) => {
    return `global:${teg}` as const
}

export const getIdTeg = (teg: CACHE_TAG, id: string) => {
    return `id:${id}-${teg}` as const //id:4444-users
}