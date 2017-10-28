import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { LigasComponent } from './components/ligas/ligas.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { LigaComponent } from './components/liga/liga.component';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    children:[
      { path: '', redirectTo: 'temporadas', pathMatch: 'full' },
      { path: 'temporadas', component:TemporadasComponent  },
      { path: 'ligas', component:LigasComponent  },
      { path: 'liga/:id', component:LigaComponent  },
      { path: 'equipo/:id', component:EquipoComponent  },
      { path: 'jornada/:id', component:JornadaComponent  },

    ]
  },

  { path: 'ligas', component: LigasComponent },
  { path: 'liga/:id_liga/equipo/:id_equipo', component: EquipoComponent },
  { path: 'liga/:id_liga/jornada/:id_jornada', component: JornadaComponent },

  { path: '', redirectTo: 'ligas', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
