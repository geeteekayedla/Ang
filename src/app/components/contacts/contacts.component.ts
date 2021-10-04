import { Component, OnInit } from '@angular/core';

import { Contact, Contacts } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  
})
export class ContactsComponent implements OnInit {

  contacts:Contact[]=[];
   data:any;
  constructor(private contactService:ContactService
  ) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(data=>{
      this.contacts=data?data.contactsList:[];
    })
    
  }

}
