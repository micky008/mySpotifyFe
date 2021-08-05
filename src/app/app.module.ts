import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { LeftComponantComponent } from './left-componant/left-componant.component';
import { CenterComponantComponent } from './center-componant/center-componant.component';
import { RightComponantComponent } from './right-componant/right-componant.component';
import { FooterComponantComponent } from './footer-componant/footer-componant.component';
import { FolderDAO } from './dao/FolderDAO';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MusiqueDAO } from './dao/MusiqueDAO';
import { PlaylistDAO } from './dao/PlaylistDAO';
import { DragDropModule } from 'primeng/dragdrop';
import { DragDropService } from './services/dragdrop.service';




@NgModule({
  declarations: [
    AppComponent,
    LeftComponantComponent,
    CenterComponantComponent,
    RightComponantComponent,
    FooterComponantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollPanelModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    SidebarModule,
    DragDropModule
  ],
  providers: [FolderDAO, MusiqueDAO, PlaylistDAO, DragDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
