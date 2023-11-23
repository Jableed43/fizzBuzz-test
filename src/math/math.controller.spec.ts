// math.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { MathController } from './math.controller';
import { MathService } from './math.service';

describe('MathController', () => {
  let controller: MathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MathController],
      providers: [MathService], // Asegúrate de incluir el servicio aquí
    }).compile();

    controller = module.get<MathController>(MathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should perform addition correctly', () => {
    const result = controller.performAddition({ a: 5, b: 3 });
    expect(result).toEqual({ result: 8 });
  });

  it('should perform subtraction correctly', () => {
    const result = controller.performSubtraction({ a: 8, b: 3 });
    expect(result).toEqual({ result: 5 });
  });

  it('should perform multiplication correctly', () => {
    const result = controller.performMultiplication({ a: 4, b: 2 });
    expect(result).toEqual({ result: 8 });
  });

  it('should perform division correctly', () => {
    const result = controller.performDivision({ a: 6, b: 2 });
    expect(result).toEqual({ result: 3 });
  });
});
