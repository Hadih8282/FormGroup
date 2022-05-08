import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authenticate/authenticate.module').then((m) => m.AuthenticateModule),
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./book/book.module').then((m) => m.BookModule),
      canActivate:[AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
