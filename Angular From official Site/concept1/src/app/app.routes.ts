import { Routes } from '@angular/router';
import { FirstComponent } from './FirstComponent/First.component';
import { SecondComponent } from './SecondComponent/Second.component';

export const routes: Routes = [
    {path:"first-component",title:"First Componet",component:FirstComponent},
    {path:"second-component",title:"Second Component",component:SecondComponent}
];