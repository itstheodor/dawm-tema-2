import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Person {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ length: 50 })
	name: string

	@Column('int')
	age: number

	@Column({ length: 49 })
	address: string
}
