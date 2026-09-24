import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreditCard } from '@primeicons/angular/credit-card';
import { Gift } from '@primeicons/angular/gift';
import { Wallet } from '@primeicons/angular/wallet';
import { Shield } from '@primeicons/angular/shield';
import { Users } from '@primeicons/angular/users';
import { Verified } from '@primeicons/angular/verified';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainPage } from './pages/main-page/main-page';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    MainPage,
    RouterOutlet,
    CreditCard,
    Gift,
    Wallet,
    Shield,
    Users,
    Verified,
    ToastModule,
    SpeedDialModule,
    Footer,
    Header,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  providers: [MessageService],
})
export class App {
  protected readonly title = signal('sjslandingpage');
  private messageService = inject(MessageService);

  show() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Fitur belum tersedia',
      detail: 'Mohon maaf saat ini fitur belum tersedia.',
    });
  }

  openWhatsApp() {
    const phone = '6281234567890';
    const message = 'Assalamu’alaikum, saya ingin mendapatkan informasi mengenai program umrah.';

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  }
}
