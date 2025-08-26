import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-home',
  imports: [RouterModule,SharedModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
