import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import cors from 'cors'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(cors({ credentials: true, origin: '*' }))

	const config = new DocumentBuilder()
		.setTitle('DAWM-TEMA2')
		.setDescription('')
		.setVersion('1.0')
		.build()

	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup(`/`, app, document)
	await app.listen(3000)
}

void bootstrap()
