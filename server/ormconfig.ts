import {DataSourceOptions} from 'typeorm'

const appDataSource: DataSourceOptions = {
	type: 'sqlite',
	database: 'db.sqlite',
	synchronize: false,
	migrationsRun: true,
	entities: ['dist/**/*.entity{.ts,.js}'],
	migrations: ['dist/src/migrations/*.js'],
}

export default appDataSource
