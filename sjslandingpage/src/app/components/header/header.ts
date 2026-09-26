import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MessageService,MenuItem } from '@openng/optimus-ui/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from '@openng/optimus-ui/button';
import { MenuModule } from '@openng/optimus-ui/menu';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,ButtonModule,MenuModule],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
  
})
export class Header implements OnInit {
  private messageService = inject(MessageService);

  show() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Belum ada jadwal keberangkatan',
      detail: 'Mohon maaf saat jadwal keberangkatan belum tersedia.',
    });
  }

  goToApplication = (): void => {
    const url = environment.urlApp;
    console.log(url)
    window.location.href = url;
  }

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Features',
                items: [
                    {
                        label: 'App',
                        icon: 'pi pi-code',
                        command: () =>{
                          this.goToApplication()
                        }
                    },
                    {
                        label: 'Join',
                        icon: 'pi pi-plus-circle'
                    }
                ]
            }
        ];
    }
}
