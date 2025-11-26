import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skeleton-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-two.component.html',
  styleUrl: './skeleton-two.component.scss'
})
export class SkeletonTwoComponent {
  @Input() type: 'circle' | 'square' | 'rectangle' = 'rectangle';

  private _width?: string;
  private _height?: string;

  @Input() set width(value: string | undefined) {
    this._width = this.validateSize(value);
  }

  @Input() set height(value: string | undefined) {
    this._height = this.validateSize(value);
  }

  get widthSafe() {
    return this._width;
  }

  get heightSafe() {
    return this._height;
  }

  private validateSize(value?: string): string | undefined {
    if (!value) return undefined;

    // Regex para aceitar somente px, rem, em, vh, vw
    const valid = /^(\d+(\.\d+)?)(px|rem|em|vh|vw)$/i;

    return valid.test(value) ? value : undefined;
  }
}
