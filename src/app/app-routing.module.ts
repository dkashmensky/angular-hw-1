import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';
import { ResultComponent } from './result/result.component';
import { LoginGuard } from './login/login.guard';
import { GameGuard } from './game/game.guard';
import { ResultGuard } from './result/result.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [GameGuard],
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate: [ResultGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
