import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown-directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations:[
     AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ],
   
     //if angular is lower than 9 then need to add this to make dynamic component work
//   entryComponents:[
//     AlertComponent
//   ]
})

export class SharedModule{}