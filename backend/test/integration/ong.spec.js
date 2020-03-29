const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('Should to be able create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Rotary',
        email: 'contato@rotary.org',
        whatsapp: '83999999999',
        city: 'Jampa',
        uf: 'PB',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
