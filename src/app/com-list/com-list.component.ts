import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-list',
  templateUrl: './com-list.component.html',
  styleUrls: ['./com-list.component.scss']
})
export class ComListComponent implements OnInit {
  @Input()
  comments: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
