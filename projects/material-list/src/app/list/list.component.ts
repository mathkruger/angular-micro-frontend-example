import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  materials: any[] = [
    {
      id: 1,
      name: "Material 1",
      warehouse: "Warehouse 1"
    },
    {
      id: 2,
      name: "Material 2",
      warehouse: "Warehouse 1"
    },
    {
      id: 3,
      name: "Material 3",
      warehouse: "Warehouse 1"
    },
    {
      id: 4,
      name: "Material 4",
      warehouse: "Warehouse 1"
    },
    {
      id: 5,
      name: "Material 5",
      warehouse: "Warehouse 1"
    },
    {
      id: 6,
      name: "Material 6",
      warehouse: "Warehouse 1"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
