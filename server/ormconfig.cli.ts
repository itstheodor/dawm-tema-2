import { DataSource } from 'typeorm'

const appDataSource = new DataSource({
	type: 'sqlite',
	database: 'db.sqlite',
	synchronize: false,
	migrationsRun: true,
	entities: ['dist/**/*.entity{.ts,.js}'],
	migrations: ['dist/src/migrations/*.js'],
})

export default appDataSource
