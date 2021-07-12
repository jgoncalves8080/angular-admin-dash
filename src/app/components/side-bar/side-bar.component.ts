import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: [],
})
export class SideBarComponent implements OnInit {
  @Input() listMenu = [];

  constructor() {}

  ngOnInit(): void {}
}
