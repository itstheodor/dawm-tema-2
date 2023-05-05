import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { IsNumber, IsString } from 'class-validator'

export class CreatePersonDto {
	@ApiProperty()
	@Expose()
	@IsString()
	name: string

	@ApiProperty()
	@Expose()
	@IsNumber()
	age: number

	@ApiProperty()
	@Expose()
	@IsString()
	address: string
}
