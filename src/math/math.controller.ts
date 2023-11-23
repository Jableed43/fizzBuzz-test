// math.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Post('/add')
  performAddition(@Body() data: { a: number; b: number }): { result: number } {
    const result = this.mathService.add(data.a, data.b);
    return { result };
  }

  @Post('/subtract')
  performSubtraction(@Body() data: { a: number; b: number }): {
    result: number;
  } {
    const result = this.mathService.subtract(data.a, data.b);
    return { result };
  }

  @Post('/multiply')
  performMultiplication(@Body() data: { a: number; b: number }): {
    result: number;
  } {
    const result = this.mathService.multiply(data.a, data.b);
    return { result };
  }

  @Post('/divide')
  performDivision(@Body() data: { a: number; b: number }): { result: number } {
    const result = this.mathService.divide(data.a, data.b);
    return { result };
  }
}
