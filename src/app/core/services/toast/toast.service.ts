import { Injectable, Optional, SkipSelf, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

import { ToastSeverity } from 'src/app/shared/constants';
import { EnsureLoadedOnceGuard } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class ToastService extends EnsureLoadedOnceGuard {
  private messageService = inject(MessageService);

  constructor(@Optional() @SkipSelf() parent: ToastService) {
    super(parent);
  }

  success(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.SUCCESS, summary, detail, life);
  }

  info(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.INFO, summary, detail, life);
  }

  warn(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.WARN, summary, detail, life);
  }

  error(detail: string, life?: number, summary?: string): void {
    this.toast(ToastSeverity.ERROR, summary, detail, life);
  }

  toast(severity: string, summary?: string, detail?: string, life: number = 3000): void {
    return this.messageService.add({
      severity,
      summary,
      detail,
      life
    });
  }
}
