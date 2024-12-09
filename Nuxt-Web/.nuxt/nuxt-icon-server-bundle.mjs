function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'mdi': () => import('@iconify-json/mdi/icons.json', { with: { type: 'json' } }).then(m => m.default),
}