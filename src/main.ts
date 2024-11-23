import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for the frontend URL
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*', // Allow all origins or specify your frontend domain
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API documentation for your backend')
    .setVersion('1.0')
    .addTag('Endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Listen on the provided port (Vercel dynamically sets it)
  const port = process.env.PORT || 5432;
  const baseUrl =
    process.env.VERCEL_URL // This is set automatically by Vercel
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${port}`;

  await app.listen(port, () => {
    console.log(`Server is running on ${baseUrl}`);
    console.log(`Swagger API Docs: ${baseUrl}/api-docs`);
  });
}

bootstrap();
