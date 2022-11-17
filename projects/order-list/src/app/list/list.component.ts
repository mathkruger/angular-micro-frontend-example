import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  orders: any[] = [
    {
      id: 1,
      material: "Material 1",
      quantity: 10
    },
    {
      id: 2,
      material: "Material 2",
      quantity: 10
    },
    {
      id: 3,
      material: "Material 3",
      quantity: 10
    },
    {
      id: 4,
      material: "Material 4",
      quantity: 10
    },
    {
      id: 5,
      material: "Material 5",
      quantity: 10
    },
    {
      id: 6,
      material: "Material 6",
      quantity: 10
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
