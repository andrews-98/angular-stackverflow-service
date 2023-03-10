import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question, SearchData } from 'src/app/models/question';
import { QuestionsService } from 'src/app/shared/services/questions.service';
import { fadeAnimation } from '../animations/animations';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class SearchResultComponent implements OnInit {
  items!: SearchData<Question>
  query: string = ''

  constructor(
    private service: QuestionsService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params) =>{
      this.query = params['q']
      this.search(this.query)
    })
    
    

  }

  search(searchValue: string) {
    this.service.search(searchValue).subscribe(data => {
      this.items = data
    })

  }
}
