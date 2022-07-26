import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsComponent } from "./events.component";
import { CiudadelaComfenalcoComponent } from "./containers/armenia/comuna1/ciudadela-comfenalco/ciudadela-comfenalco.component";
import { VeracruzComponent } from "./containers/calarca/veracruz/veracruz.component"
import { LaSoledadComponent } from "./containers/montenegro/la-soledad/la-soledad.component";
import { VillaLauraComponent } from "./containers/quimbaya/villa-laura/villa-laura.component";
import { AltoDeLaTazaComponent } from "./containers/circasia/alto-de-la-taza/alto-de-la-taza.component";
import { LaEsperanzaComponent } from "./containers/quimbaya/la-esperanza/la-esperanza.component";
import { ColiseoLasGarzasComponent } from "./containers/pijao/coliseo-las-garzas/coliseo-las-garzas.component";
import { ParquePrincipalComponent } from "./containers/cordoba/parque-principal/parque-principal.component";

const routes: Routes = [
  { path: '', component: EventsComponent, children:
  [
    // ARMENIA
      // Comuna 1
      { path: 'armenia/comuna1/ciudadela-comfenalco', component: CiudadelaComfenalcoComponent },

    // CALARCÁ
    { path: 'calarca/veracruz', component: VeracruzComponent },

    // CIRCASIA
    { path: 'circasia/alto-de-la-taza', component: AltoDeLaTazaComponent },

    // MONTENEGRO
    { path: 'montenegro/la-soledad', component: LaSoledadComponent },

    // QUIMBAYA
    { path: 'quimbaya/villa-laura', component: VillaLauraComponent },
    { path: 'quimbaya/la-esperanza', component: LaEsperanzaComponent },

    // PIJAO
    { path: 'pijao/coliseo-las-garzas', component: ColiseoLasGarzasComponent },

    // CÓRDOBA
    { path: 'cordoba/parque-principal', component: ParquePrincipalComponent}
  ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }