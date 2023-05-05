import { Component, OnInit } from '@angular/core'
import { type Person } from '../person.interface'
import { TableService } from './table.service'

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
	providers: [TableService],
})
export class TableComponent implements OnInit {
	personList: Person[] = []
	selectedPerson: Person | undefined = undefined
	isFormVisible = false

	constructor(private tableService: TableService) {
	}

	ngOnInit(): void {
		this.getPersons()
	}

	getPersons() {
		this.tableService
			.getPersons()
			.subscribe((response) => {
				this.personList = response
			})
	}

	openFormModal(): void {
		this.selectedPerson = undefined
		this.isFormVisible = true
	}

	closeFormModal() {
		this.isFormVisible = false
	}

	onPersonUpdated(updatedPerson: Person) {
		if (updatedPerson.id > 0) {
			this.tableService
				.updatePerson(updatedPerson)
				.subscribe(() => {
					this.closeFormModal()
					this.getPersons()
				})
		} else {
			this.tableService
				.addPerson(updatedPerson)
				.subscribe(() => {
					this.closeFormModal()
					this.getPersons()
				})
		}
	}

	edit(data: Person) {
		this.selectedPerson = { ...data }
		this.isFormVisible = true
	}

	delete(data: Person) {
		this.tableService
			.deletePerson(data.id)
			.subscribe(() => {
				this.getPersons()
			})
	}
}
