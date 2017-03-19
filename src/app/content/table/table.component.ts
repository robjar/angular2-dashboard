import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  rows: Object[];

  constructor() {
    this.rows = [
      {
        "foo": 1,
        "boo": "ble",
        "moo": "bla"
      },
      {
        "foo": 2,
        "boo": "mi",
        "moo": "mo"
      }
    ]
  }

  ngOnInit() {
  }

}
