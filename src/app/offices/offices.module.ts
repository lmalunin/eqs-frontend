import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficesComponent } from './components/offices.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OfficesEffects } from './store/effects/offices.effects';
import { reducers } from './store/reducers';

export const COMPONENTS = [OfficesComponent];

@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class OfficesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootOfficesModule,
      providers: []
    };
  }
}

@NgModule({
  imports: [
    OfficesModule,
    StoreModule.forFeature('offices', reducers),
    EffectsModule.forFeature([OfficesEffects])
  ]
})
export class RootOfficesModule {}
