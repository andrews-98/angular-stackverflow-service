import { Component, Input, OnInit } from '@angular/core';
import { QuickPanelService } from 'src/app/shared/services/quick-panel.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tag!: string

  constructor(private service: QuickPanelService) { }

  ngOnInit(): void {
  }

  clickTag(){
     this.service.showPanel()
     this.service.showMostPopularQuestionsByTag(this.tag)
  }
}
