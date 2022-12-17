import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer, Question, SearchData } from 'src/app/models/qustion';
import { QuestionsService } from 'src/app/shared/services/questions.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
   question! :Question 
   answers!: SearchData<Answer>;
   id?: number 

  constructor(
    private service: QuestionsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
    //@ts-ignore
     this.id = +params.get('id');
    this.getQuestionDetails(this.id)
   })
  }
  
  getQuestionDetails(id: number){
    this.service.getQuestionDetail(id).subscribe( question => {
      this.question = question.items[0]
      console.log(this.question);
      
    })
    this.service.getQuestionAnswers(id).subscribe(answers => {
      this.answers = answers
      console.log(answers);
      
    })
  }
 
}
