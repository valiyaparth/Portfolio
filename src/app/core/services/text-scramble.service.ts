import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TextScrambleService {
  private readonly chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  scramble(element: HTMLElement, finalText: string): void {
    let iteration = 0;

    const interval = setInterval(() => {
      element.textContent = finalText
        .split('')
        .map((char, index) =>
          index < iteration
            ? finalText[index]
            : this.chars[Math.floor(Math.random() * this.chars.length)],
        )
        .join('');

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }

      iteration += 0.6;
    }, 28);
  }
}
