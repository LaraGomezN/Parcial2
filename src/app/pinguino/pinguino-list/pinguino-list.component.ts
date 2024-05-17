import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  pinguinos: Array<Pinguino> = [];

  selectedPinguino!: Pinguino;
  selected = false;

  mayorxd = "";
  paises = "";

  constructor(private pinguinoService: PinguinoService) { }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
      this.getMayorDistribucion();

    });
  }

  getMayorDistribucion(): void {
    let mayor: string = "";
    let paises: string = "";
    for(let i=0; i<this.pinguinos.length-1; i++){
      const lista1 = this.pinguinos[i].global_distribution.split(',');
      const lista2 = this.pinguinos[i+1].global_distribution.split(',');

      if (lista1.length>lista2.length){
        mayor = this.pinguinos[i].name;
        paises = this.pinguinos[i].global_distribution;
      }

    }
    this.mayorxd = mayor;
    this.paises = paises;
  }


  onSelected(pinguino:Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }



  ngOnInit() {
    this.getPinguinos();
  }

}

