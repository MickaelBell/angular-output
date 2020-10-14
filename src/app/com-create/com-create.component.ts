import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-com-create',
  templateUrl: './com-create.component.html',
  styleUrls: ['./com-create.component.scss']
})
export class ComCreateComponent implements OnInit {

  newCom: string;

  @Output()
  createComment = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewComment(aComm: string) {
    console.log('in addNewComment', aComm)
    this.newCom = aComm;
    this.createComment.emit(aComm)
  }

}
