import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
interface City {
  name: string;
}
@Component({
  selector: 'app-admin-news',
  standalone: true,
  imports: [FormsModule,CalendarModule,DropdownModule,ReactiveFormsModule ],
  templateUrl: './admin-news.component.html',
  styleUrl: './admin-news.component.scss'
})

export class AdminNewsComponent implements OnInit {
  cities: City[] | undefined;
  
  selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York' },
            { name: 'Rome' },
            { name: 'London' },
            { name: 'Istanbul' },
            { name: 'Paris' }
        ];
    }
}

