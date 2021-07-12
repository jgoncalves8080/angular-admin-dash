import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataType } from '../DataType';
import { TableData } from '../table-data.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss'],
})
export class EditDataComponent implements OnInit {
  data: DataType = {
    id: 0,
    renderingEngine: '',
    browser: '',
    platform: '',
    engineVersion: 0,
    cssGrade: '',
  };

  constructor(
    private activetRoute: ActivatedRoute,
    private dataService: TableData,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.retrieveById();
  }

  retrieveById(): void {
    this.data = this.dataService.retrieveById(
      Number(this.activetRoute.snapshot.paramMap.get('id'))
    );
  }

  save(): void {
    this.dataService.save(this.data);
    this.toastr.success('Dados actualizados com sucesso', 'success');
  }
}
