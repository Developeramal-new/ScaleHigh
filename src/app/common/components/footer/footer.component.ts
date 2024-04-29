import { Component } from '@angular/core';
import { CommonModules } from '../../commonModules/commonModules.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'sh-footer',
  standalone: true,
  imports: [CommonModules, MatFormFieldModule, MatInputModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
