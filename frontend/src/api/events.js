import client from './client'

export const getEvents = (upcoming) => {
  const params = upcoming !== undefined ? { upcoming: upcoming ? 'true' : 'false' } : {}
  return client.get('/events/', { params }).then((r) => r.data)
}

export const getEventDetail = (slug) =>
  client.get(`/events/${slug}/`).then((r) => r.data)
