import { Component, Input, OnInit } from '@angular/core';
import { Answer, SearchData } from 'src/app/models/qustion';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  
  @Input() answer!: Answer
  constructor() { }

  ngOnInit(): void {
  }

}
