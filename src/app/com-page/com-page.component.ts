import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-page',
  templateUrl: './com-page.component.html',
  styleUrls: ['./com-page.component.scss']
})
export class ComPageComponent implements OnInit {

  globalCmments: string[] = ['commennt 1', 'comment2', 'comment3'];

  constructor() { }

  ngOnInit(): void {
  }

  addComent(comment: string) {
    console.log('add Comment in Parent', comment)
    this.globalCmments.push(comment);
  }

}
