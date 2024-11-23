import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
    @Get()
    getRoot(): string {
    return 'Test GET / - Backend is running!';
    }
}
