import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingService } from 'src/app/shared/modules/loading/loading.service';
import { ContactService } from '../../contact.service';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactTitleComponent } from '../contact-title/contact-title.component';

import { ContactBottomComponent } from './contact-bottom.component';

describe('ContactBottomComponent', () => {
  let component: ContactBottomComponent;
  let fixture: ComponentFixture<ContactBottomComponent>;

  const ContactSvcStub = {

  };

  const LoadingSvcStub = {

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [  ContactTitleComponent, ContactItemComponent, ContactBottomComponent, ],
      providers: [
        {provide: ContactService, useValue: ContactSvcStub},
        {provide: LoadingService, useValue: LoadingSvcStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
