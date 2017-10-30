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
import { CrearTemporadaComponent } from './dialogos/crear-temporada/crear-temporada.component';
import { CrearLigaComponent } from './dialogos/crear-liga/crear-liga.component';
import { CrearEquipoComponent } from './dialogos/crear-equipo/crear-equipo.component';
import { CrearJugadorComponent } from './dialogos/crear-jugador/crear-jugador.component';
import { CrearJornadaComponent } from './dialogos/crear-jornada/crear-jornada.component';
import { LoginComponent } from './components/login/login.component';
import { AuthHttp } from 'angular2-jwt';
import { AuthModule } from './modules/auth/auth.module';
import { AuthGuard } from './guards/auth.guard';

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
    LigaComponent,
    CrearTemporadaComponent,
    CrearLigaComponent,
    CrearEquipoComponent,
    CrearJugadorComponent,
    CrearJornadaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    AngularMaterialModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    TextMaskModule

  ],
  providers: [
    AuthGuard,
    ConfigService,
    AuthService,
    TemporadaService,
    LigaService,
    EquipoService,
    JornadaService,
    PartidoService,
    JugadorService
  ],
  entryComponents: [
    CrearTemporadaComponent,
    CrearLigaComponent,
    CrearJugadorComponent,
    CrearEquipoComponent,
    CrearJornadaComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
