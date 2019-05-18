import  {Component} from '@angular/core';

@Component({
	selector: 'cursos-tag',
	templateUrl:'./cursos.component.html'
})

export class CursosComponent{
	private titulo : string;
	private Flag : boolean;
	private cursos : {};
	constructor(){
		this.titulo='Seleccione un curso';
		this.Flag=false;
		this.cursos={
			Materia1:"Ambiente",
			Materia2:"Gestion"
		};
	}
}