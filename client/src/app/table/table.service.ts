import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { type Person } from '../person.interface'

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
	}),
}

@Injectable()
export class TableService {
	addressUrl = 'http://localhost:3000/person/'

	constructor(private http: HttpClient) {
	}

	getPersons(): Observable<Person[]> {
		return this.http.get<Person[]>(this.addressUrl)
	}

	addPerson(address: null | Person): Observable<Person> {
		return this.http.post<Person>(this.addressUrl, address, httpOptions)
	}

	updatePerson(address: Person): Observable<Person> {
		return this.http.put<Person>(`${this.addressUrl}${address.id}`, address, httpOptions)
	}

	deletePerson(id: number): Observable<void> {
		return this.http.delete<void>(`${this.addressUrl}${id}`)
	}
}
