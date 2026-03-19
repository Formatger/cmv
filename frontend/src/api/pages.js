import client from './client'

export const getPage = (page) =>
  client.get(`/pages/${page}/`).then((r) => r.data)
