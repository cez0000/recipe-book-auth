import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertModalComponent } from "./alert-modal/alert-modal.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";

@NgModule({
  declarations: [
    AlertModalComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],

  exports: [
    AlertModalComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule,
  ],
})
export class SharedModule {}
