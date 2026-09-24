import { Component, signal, inject  } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private messageService = inject(MessageService);

  show() {
    this.messageService.add({ severity: 'warn', summary: 'Fitur belum tersedia', detail: 'Mohon maaf saat ini fitur belum tersedia.' });
  }
}
