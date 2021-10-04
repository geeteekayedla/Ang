import { Component, OnInit } from '@angular/core';

import { Contact, Contacts } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  contacts: Contact[] = [];
  data:any;
  constructor(private contactService:ContactService
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data=>{
      this.contacts=data?data.contactsList:[];
    })
    // call your service and assign response to contacts
  }

}
