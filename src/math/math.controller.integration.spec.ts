import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MathModule } from './math.module';

describe('MathController (Integration)', () => {
  let app: any;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [MathModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should perform addition correctly', async () => {
    const response = await request(app.getHttpServer())
      .post('/math/add')
      .send({ a: 5, b: 3 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ result: 8 });
  });

  it('should perform subtraction correctly', async () => {
    const response = await request(app.getHttpServer())
      .post('/math/subtract')
      .send({ a: 8, b: 3 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ result: 5 });
  });

  it('should perform multiplication correctly', async () => {
    const response = await request(app.getHttpServer())
      .post('/math/multiply')
      .send({ a: 4, b: 2 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ result: 8 });
  });

  it('should perform division correctly', async () => {
    const response = await request(app.getHttpServer())
      .post('/math/divide')
      .send({ a: 6, b: 2 });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ result: 3 });
  });

  afterEach(() => {
    return app.close(); // Usa 'return' para asegurar la espera
  });
});
