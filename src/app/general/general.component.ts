import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-general',
	templateUrl: './general.component.html',
	styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

	public form!: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
	) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			nombre: ['', [Validators.required]],
			apellidos: ['', [Validators.required]],
			documento: ['', [Validators.required]],
			nro_documento: ['', [Validators.required]],
			correo: ['', [Validators.required, Validators.email]],
			celular: ['', [Validators.required]],
			fecha_nacimiento: ['', [Validators.required]],
			genero: ['', [Validators.required]],
		});
	}

	save() {
		console.log(this.form.value)
	}

}
