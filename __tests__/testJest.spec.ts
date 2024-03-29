import request from 'supertest'
import app from '../index'

describe('Testes das rotas dos alunos', () => {
  it('Retorna todos os alunos', async () => {
    const response = await request(app).get('/aluno')
    expect(response.status).toBe(200)
  })

  it('Cria um novo aluno', async () => {
    const novoAluno = {
      nome: 'Novo nome',
      email: 'test@test.com',
      nacionalidade: 'Test',
    }
    const response = await request(app).post('/aluno').send(novoAluno)

    expect(response.status).toBe(200)
  })
})
