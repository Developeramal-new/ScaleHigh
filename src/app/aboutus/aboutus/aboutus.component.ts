import { Component } from '@angular/core';
import { CommonModules } from '../../common/commonModules/commonModules.module';

@Component({
  selector: 'sh-aboutus',
  standalone: true,
  imports: [CommonModules],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss',
})
export class AboutusComponent {}
