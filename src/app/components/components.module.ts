import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { QuestionItemComponent } from './question-item/question-item.component';
import { AnswerCounterComponent } from './answer-counter/answer-counter.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { RouterModule } from '@angular/router';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AnswerComponent } from './answer/answer.component';
import { QuickPreviewComponent } from './quick-preview/quick-preview.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    QuestionItemComponent,
    AnswerCounterComponent,
    TagComponent,
    AuthorComponent,
    QuestionDetailComponent,
    AnswerComponent,
    QuickPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    SearchBarComponent,
    QuestionItemComponent,
    AnswerCounterComponent,
    QuestionDetailComponent,
    AnswerComponent,
    QuickPreviewComponent
  ]
})
export class ComponentsModule { }
