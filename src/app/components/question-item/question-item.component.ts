import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/qustion';
import { QuickPanelService } from 'src/app/shared/services/quick-panel.service';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  @Input() question!: Question

  constructor(private service: QuickPanelService) { }

  ngOnInit(): void {
  }

  closePanel(){
    this.service.closePanel()
  }
}
