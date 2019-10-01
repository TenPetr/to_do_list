import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AddNewTaskPage } from "./add-new-task/add-new-task.page";
import { DoneAllPage } from "./done-all/done-all.page";
import { AddNewLabelsPage } from "./add-new-labels/add-new-labels.page";
import { SettingsPage } from "./settings/settings.page";

import { TimeDateService } from "./services/time-date.service";
import { TasksService } from "./services/tasks.service";
import { LabelsService } from "./services/labels.service";

@NgModule({
  declarations: [
    AppComponent,
    AddNewTaskPage,
    DoneAllPage,
    AddNewLabelsPage,
    SettingsPage
  ],
  entryComponents: [
    AddNewTaskPage,
    DoneAllPage,
    AddNewLabelsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TimeDateService,
    TasksService,
    LabelsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
