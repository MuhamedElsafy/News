import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

interface City {
  name: string,
  code: string
}
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-create-news',
  standalone: true,
  imports: [FormsModule ,CommonModule,TableModule],
  templateUrl: './create-news.component.html',
  styleUrl: './create-news.component.scss'
})
export class CreateNewsComponent implements OnInit{

  selectedImages: string[] = [];

  onFileSelect(event: any): void {
    if (event.target.files) {
      this.selectedImages = [];
      for (let file of event.target.files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImages.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }
  cities: City[]=[
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];;

products!: any[];

cols!: Column[];

constructor() {}

ngOnInit() {

         this.products = [
          {
            Title: 'Bamboo Watch',
            description: 'Product Description',
            Template: 'Accessories',
            Create_Date: 'INSTOCK',
        },
        {
          Title: 'Bamboo Watch',
          description: 'Product Description',
          Template: 'Accessories',
          Create_Date: 'INSTOCK',
      },
      {
        Title: 'Bamboo Watch',
        description: 'Product Description',
        Template: 'Accessories',
        Create_Date: 'INSTOCK',
    },
      {
        Title: 'Bamboo Watch',
        Template: 'Accessories',
        Create_Date: 'INSTOCK', 
       description: 'Product Description',

    },
    ];

    this.cols = [
      { field: 'Template', header: 'Template' },
      { field: 'Title', header: 'Title' },
      { field: 'Create_Date', header: 'Create Date' },
  ];
      
    }
}
