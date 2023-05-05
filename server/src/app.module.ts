import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import appDataSource from '../ormconfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PersonModule } from './modules/address/person.module'

@Module({
	imports: [
		TypeOrmModule.forRoot(appDataSource),
		PersonModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
