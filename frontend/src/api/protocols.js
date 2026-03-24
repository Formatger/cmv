import client from './client'

export const getProtocols = () =>
  client.get('/protocols/').then((r) => r.data)
