import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [CommonModule, NgOptimizedImage],
})
export class CoreModule {}
