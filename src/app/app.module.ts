import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerI18n, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TextMaskModule } from "angular2-text-mask";
import { LigasComponent } from './components/ligas/ligas.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { TemporadaService } from './services/temporada.service';
import { LigaService } from './services/liga.service';
import { EquipoService } from './services/equipo.service';
import { JornadaService } from './services/jornada.service';
import { ConfigService } from './services/config.service';
import { AuthService } from './services/auth.service';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { PartidoService } from './services/partido.service';
import { JugadorService } from './services/jugador.service';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LigaComponent } from './components/liga/liga.component';

@NgModule({
  declarations: [
    AppComponent,
    LigasComponent,
    PartidosComponent,
    EquiposComponent,
    JugadoresComponent,
    EquipoComponent,
    JornadaComponent,
    TemporadasComponent,
    LayoutComponent,
    LigaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    TextMaskModule

  ],
  providers: [
    ConfigService,
    AuthService,
    TemporadaService,
    LigaService,
    EquipoService,
    JornadaService,
    PartidoService,
    JugadorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
