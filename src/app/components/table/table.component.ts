import { Component, OnInit } from '@angular/core';
import { DataType } from './DataType';
import { TableData } from './table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  _data: DataType[] = [];

  _filterBy: string = '';

  filterData: DataType[] = [];

  constructor(private dataService: TableData) {
    this.filterData = this._data;
  }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this._data = this.dataService.retrieveAll();
    this.filterData = this._data;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filterData = this._data.filter(
      (item) =>
        item?.renderingEngine
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
