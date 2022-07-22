import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsComponent } from "./events.component";
import { CiudadelaComfenalcoComponent } from "./containers/armenia/comuna1/ciudadela-comfenalco/ciudadela-comfenalco.component";
import { VeracruzComponent } from "./containers/calarca/veracruz/veracruz.component"
import { LaSoledadComponent } from "./containers/montenegro/la-soledad/la-soledad.component";
import { VillaLauraComponent } from "./containers/quimbaya/villa-laura/villa-laura.component";

const routes: Routes = [
  { path: '', component: EventsComponent, children:
  [
    // ARMENIA
      // Comuna 1
      { path: 'armenia/comuna1/ciudadela-comfenalco', component: CiudadelaComfenalcoComponent },

    // CALARCÁ
    { path: 'calarca/veracruz', component: VeracruzComponent },

    // MONTENEGRO
    { path: 'montenegro/la-soledad', component: LaSoledadComponent },

    // QUIMBAYA
    { path: 'quimbaya/villa-laura', component: VillaLauraComponent }
  ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }