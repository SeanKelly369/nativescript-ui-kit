import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptTransitionsComponent } from './nativescript-transitions.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptTransitionsComponent }])],
  declarations: [NativescriptTransitionsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptTransitionsModule {}
