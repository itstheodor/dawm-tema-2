import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AppController } from '../../../decorators/app-controller.decorator'
import { CreatePersonDto } from '../dto/createPerson.dto'
import { PersonDto } from '../dto/person.dto'
import { PersonService } from '../services/person.service'

@ApiTags('person')
@AppController('person')
export class PersonController {
	constructor(private readonly personService: PersonService) {
	}

	@Get()
	public async getPerson(): Promise<PersonDto[]> {
		return this.personService.getPersons()
	}

	@Post()
	async createPerson(
		@Body() createPerson: CreatePersonDto,
	): Promise<PersonDto> {
		return this.personService.createPerson(createPerson)
	}

	@Put(':id')
	async updatePerson(
		@Param('id') id: number,
		@Body() updatePerson: CreatePersonDto,
	): Promise<PersonDto> {
		return this.personService.updatePerson(id, updatePerson)
	}

	@Delete(':id')
	async deletePerson(
		@Param('id') id: number,
	): Promise<void> {
		return this.personService.deletePerson(id)
	}
}
