import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentsComponent } from './components/shipments.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ShipmentsEffects } from './store/effects/shipments.effects';
import { reducers } from './store/reducers';
import { MaterialModule } from '../material';
import { ShipmentsService } from './services/shipments.services';

export const COMPONENTS = [ShipmentsComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ShipmentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootShipmentsModule,
      providers: [ShipmentsService]
    };
  }
}

@NgModule({
  imports: [
    ShipmentsModule,
    StoreModule.forFeature('shipments', reducers),
    EffectsModule.forFeature([ShipmentsEffects])
  ]
})
export class RootShipmentsModule {}
