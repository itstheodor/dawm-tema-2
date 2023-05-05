import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Person } from '../person.interface'

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: [],
})
export class FormComponent implements OnInit {
	@Input() person: Person | undefined
	@Output() onFormUpdated = new EventEmitter<Person>()
	formGroup: FormGroup

	constructor(private formBuilder: FormBuilder) {
		this.formGroup = this.formBuilder.group({
			name: ['', Validators.required],
			age: ['', Validators.required],
			address: ['', Validators.required],
		})
	}

	ngOnInit(): void {
		if (this.person) {
			this.formGroup.patchValue(this.person)
		}
	}

	submitForm() {
		if (this.formGroup.valid) {
			const updatedPerson: Person = this.formGroup.value
			if (this.person) {
				updatedPerson.id = this.person.id
			}
			this.onFormUpdated.emit(updatedPerson)
		}
	}
}
