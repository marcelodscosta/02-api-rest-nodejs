import { FastifyInstance } from 'fastify'
import crypto from 'node:crypto'
import { knex } from '../database'

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Transação de teste',
        amount: 1000,
      })
      .returning('*')

    return transactions
  })
}
