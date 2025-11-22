import { Component, signal } from '@angular/core';
import { timer } from 'rxjs';
import { SkeletonComponent } from '../../shared/skeleton/skeleton.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [SkeletonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  loading = signal(true);
  user = signal<{ name: string; job: string; avatar: string } | null>(null);

  constructor() {
    timer(2000).subscribe(() => {
      this.user.set({
        name: 'Maria Silva',
        job: 'Frontend Developer',
        avatar: 'https://i.pravatar.cc/150?img=47',
      });
      this.loading.set(false);
    });
  }
}
