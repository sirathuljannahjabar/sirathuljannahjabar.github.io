import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DialogModule } from '@openng/optimus-ui/dialog';
import { ButtonModule } from '@openng/optimus-ui/button';
import { InputTextModule } from '@openng/optimus-ui/inputtext';
import { Button } from '@openng/optimus-ui/button';


@Component({
  selector: 'app-main-page',
  imports: [RouterLink, RouterLinkActive, DialogModule,InputTextModule,Button],
  templateUrl: './main-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main-page.css',
})
export class MainPage {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
