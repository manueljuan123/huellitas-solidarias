import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { EventsRoutingModule } from "./events-routing.module";
import { EventsComponent } from "./events.component";
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';
import { CiudadelaComfenalcoComponent } from './containers/armenia/comuna1/ciudadela-comfenalco/ciudadela-comfenalco.component';
import { VeracruzComponent } from './containers/calarca/veracruz/veracruz.component';
import { LaSoledadComponent } from './containers/montenegro/la-soledad/la-soledad.component';
import { VillaLauraComponent } from './containers/quimbaya/villa-laura/villa-laura.component';

@NgModule({
    declarations: [
        EventsComponent,
        GalleryLightboxComponent,
        CiudadelaComfenalcoComponent,
        VeracruzComponent,
        LaSoledadComponent,
        VillaLauraComponent,
    ],
    imports: [
        CommonModule,
        EventsRoutingModule,
        SharedModule,
    ]
})
export class EventsModule { }