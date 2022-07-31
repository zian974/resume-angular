import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContactBottomComponent } from './modules/cv/contact/components/contact-bottom/contact-bottom.component';
import { ContactItemComponent } from './modules/cv/contact/components/contact-item/contact-item.component';
import { ContactTitleComponent } from './modules/cv/contact/components/contact-title/contact-title.component';
import { ContactModule } from './modules/cv/contact/contact.module';
import { LoadingService } from './shared/modules/loading/loading.service';

describe('AppComponent', () => {

  const LoadingSvcStub = {

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, ContactModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        {provide: LoadingService, useValue: LoadingSvcStub},
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'zian-app'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(1).toEqual(1);
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('zian-app app is running!');
  // });
});
