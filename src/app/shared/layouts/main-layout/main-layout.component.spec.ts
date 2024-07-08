import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SVG_ICON_REGISTRY_PROVIDER, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideLocationMocks } from '@angular/common/testing';

import { LayoutService } from '@core/services';
import { layoutServiceMock } from '@core/mocks';

import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainLayoutComponent],
      providers: [
        {
          provide: LayoutService,
          useValue: layoutServiceMock
        },
        SVG_ICON_REGISTRY_PROVIDER,
        { provide: SvgLoader, useClass: SvgHttpLoader },
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([]),
        provideLocationMocks()
      ]
    });
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
