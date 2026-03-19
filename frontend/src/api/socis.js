import client from './client'

export const getSocisIndividuals = () =>
  client.get('/socis/').then((r) => r.data)

export const getGrups = () =>
  client.get('/socis/grups/').then((r) => r.data)
