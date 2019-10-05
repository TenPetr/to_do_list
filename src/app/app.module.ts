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
import { AddNewLabelsPageModule } from "./add-new-labels/add-new-labels.module";
import { SettingsPage } from "./settings/settings.page";

import { TimeDateService } from "./services/time-date.service";
import { TasksService } from "./services/tasks.service";
import { LabelsService } from "./services/labels.service";
import { SettingsService } from "./services/settings.service";

@NgModule({
  declarations: [AppComponent, DoneAllPage, SettingsPage],
  entryComponents: [AddNewTaskPage, DoneAllPage, SettingsPage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AddNewLabelsPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TimeDateService,
    TasksService,
    LabelsService,
    SettingsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
