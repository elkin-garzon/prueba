import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-financiera',
	templateUrl: './financiera.component.html',
	styleUrls: ['./financiera.component.scss']
})
export class FinancieraComponent implements OnInit {

	public formFinanciera!: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.formFinanciera = this.formBuilder.group({
			ocupacion: ['', [Validators.required]],
			nivel_educacion: ['', [Validators.required]],
			actividad: ['', [Validators.required]],
			ingresos: ['', [Validators.required]],
			gastos: ['', [Validators.required]]
		});
	}

	save(){
		console.log(this.formFinanciera.value)
	}

}
