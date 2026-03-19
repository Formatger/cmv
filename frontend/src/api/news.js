import client from './client'

export const getNews = (page = 1) =>
  client.get('/news/', { params: { page } }).then((r) => r.data)

export const getNewsDetail = (slug) =>
  client.get(`/news/${slug}/`).then((r) => r.data)
