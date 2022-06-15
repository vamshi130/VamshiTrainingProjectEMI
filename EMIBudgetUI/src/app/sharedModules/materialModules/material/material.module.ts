
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';



const materialComponents:any=[MatToolbarModule,
  MatButtonModule,MatIconModule,MatInputModule,MatCardModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,
  MatMenuModule,MatDialogModule,MatTooltipModule
                             ];
@NgModule({
  exports:[materialComponents],
  imports: [materialComponents]
})
export class MaterialModule { }
