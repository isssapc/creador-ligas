import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JornadaComponent } from './components/jornada/jornada.component';
import { LigasComponent } from './components/ligas/ligas.component';
import { LayoutComponent } from './components/layout/layout.component';
import { TemporadasComponent } from './components/temporadas/temporadas.component';
import { LigaComponent } from './components/liga/liga.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    canActivate: [AuthGuard],
    children:[
      { path: '', redirectTo: 'temporadas', pathMatch: 'full' },
      { path: 'temporadas', component:TemporadasComponent  },
      { path: 'ligas', component:LigasComponent  },
      { path: 'liga/:id', component:LigaComponent  },
      { path: 'equipo/:id', component:EquipoComponent  },
      { path: 'jornada/:id', component:JornadaComponent  },

    ]
  },

  { path: 'login', component: LoginComponent },

  //not found
  { path: '**', redirectTo: 'login' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
