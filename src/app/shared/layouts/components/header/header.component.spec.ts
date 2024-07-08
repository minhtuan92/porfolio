import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SVG_ICON_REGISTRY_PROVIDER, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';

import { LayoutService } from '@core/services';
import { layoutServiceMock } from '@core/mocks';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
