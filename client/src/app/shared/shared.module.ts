import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { ButtonComponent } from './components/button/button.component';
import { SignInUpHeaderComponent } from './components/sign-in-up-header/sign-in-up-header.component';
import { InputComponent } from './components/input/input.component';
import { SignInUpTemplateComponent } from './components/sign-in-up-template/sign-in-up-template.component';
import { FormComponent } from './components/form/form.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MobileHomeHeadingComponent } from './components/mobile-home-heading/mobile-home-heading.component';
import { RatingComponent } from './components/rating/rating.component';
import { LinkComponent } from './components/link/link.component';
import { SelectComponent } from './components/select/select.component';
import { AutocompleteInputComponent } from './components/autocomplete-input/autocomplete-input.component';
import { ClickOutsideDirective } from './components/autocomplete-input/click-outside.directive';
import { SearchFilterPipe } from './components/autocomplete-input/filter.pipe';
import { UserSubpageNavComponent } from './components/user-subpage-nav/user-subpage-nav.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SignInUpHeaderComponent,
    InputComponent,
    SignInUpTemplateComponent,
    FormComponent,
    ListItemComponent,
    ListComponent,
    CategoryItemComponent,
    CategoriesComponent,
    MobileHomeHeadingComponent,
    RatingComponent,
    LinkComponent,
    SelectComponent,
    AutocompleteInputComponent,
    ClickOutsideDirective,
    SearchFilterPipe,
    UserSubpageNavComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  exports: [
    ButtonComponent,
    SignInUpHeaderComponent,
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    SignInUpTemplateComponent,
    FormComponent,
    MatIconModule,
    ListItemComponent,
    ListComponent,
    CategoryItemComponent,
    CategoriesComponent,
    MobileHomeHeadingComponent,
    RatingComponent,
    LinkComponent,
    SelectComponent,
    AutocompleteInputComponent,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    UserSubpageNavComponent,
  ],
})
export class SharedModule {}
