import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreatePersonDto } from '../dto/createPerson.dto'
import { Person } from '../entities/person.entity'

@Injectable()
export class PersonService {
	constructor(
		@InjectRepository(Person)
		private readonly personRepository: Repository<Person>,
	) {
	}

	async getPersons(): Promise<Person[]> {
		return await this.personRepository.find()
	}

	async createPerson(person: CreatePersonDto): Promise<Person> {
		return await this.personRepository.save(person)
	}

	async updatePerson(id: number, newPerson: CreatePersonDto): Promise<Person> {
		const person = await this.personRepository.findOne({
			where: { id },
		})

		if (!person) {
			throw new NotFoundException(`Person with id ${id} not found`)
		}

		const updatedPerson = { ...person, ...newPerson }
		return await this.personRepository.save(updatedPerson)
	}

	async deletePerson(id: number): Promise<void> {
		const person = await this.personRepository.findOne({
			where: { id },
		})

		if (!person) {
			throw new NotFoundException(`Person with id ${id} not found`)
		}

		await this.personRepository.delete(id)
	}
}
