import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './wrapper.component.html',
  styleUrls: [],
})
export class WrapperComponent implements OnInit {
  @Input() name: string = '';
  constructor() {}

  ngOnInit(): void {}
}
