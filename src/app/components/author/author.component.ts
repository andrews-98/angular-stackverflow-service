import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/qustion';
import { QuickPanelService } from 'src/app/shared/services/quick-panel.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() author!: Owner

  constructor(private service: QuickPanelService) { }

  ngOnInit(): void {
  }

  clickAuthor(){
    this.service.showPanel()
    this.service.showMostPopularQuestionsByAuthor(this.author.user_id, this.author.display_name)
  }
}
