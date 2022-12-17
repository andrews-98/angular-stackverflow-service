import { Component, OnInit } from '@angular/core';
import { Question, SearchData } from 'src/app/models/qustion';
import { QuickPanelService } from 'src/app/shared/services/quick-panel.service';

@Component({
  selector: 'app-quick-preview',
  templateUrl: './quick-preview.component.html',
  styleUrls: ['./quick-preview.component.scss']
})
export class QuickPreviewComponent implements OnInit {

  isPanelVisible: boolean = false
  items!: SearchData<Question>
  loading!: boolean
  searchPropertyName!: string
  searchValue!: string

  constructor(private service: QuickPanelService) { }

  ngOnInit(): void {
    this.initPanel()
  }

  initPanel() {
    this.service.isPanelVisible.subscribe( data => this.isPanelVisible = data)

    this.service.quickData.subscribe( data => {
      this.items = data
    })

    this.service.loading.subscribe( data => this.loading = data )

    this.service.searchByPropertyName.subscribe( data => this.searchPropertyName = data)

    this.service.searchByValue.subscribe( data => this.searchValue = data)
  }

  closePanel(){
    this.service.closePanel()
  }
}
