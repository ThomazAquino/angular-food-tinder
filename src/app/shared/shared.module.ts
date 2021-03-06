import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';

@NgModule({
  declarations: [SanitizerPipe],
  imports: [CommonModule],
  exports: [SanitizerPipe],
})
export class SharedModule {}
