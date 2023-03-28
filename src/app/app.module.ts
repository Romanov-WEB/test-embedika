import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms"
import { NgForOf } from "@angular/common"

import { AppComponent } from './app.component'
import { GraphQLModule } from './graphql.module'
import { DashboardComponent } from "./components/dashboard/dashboard.component"
import { CardComponent } from "./components/card/card.component"
import { AppRoutingModule } from "./app-routing.module"
import { SearchFormComponent } from "./components/search-form/search-form.component"

@NgModule({
  exports: [
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    SearchFormComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    NgForOf,
    BrowserModule,
    GraphQLModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
