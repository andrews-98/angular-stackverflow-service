import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Answer, Question, SearchData } from 'src/app/models/qustion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  search(searchValue: string): Observable<SearchData<Question>>{
    const api = `${environment.apiUrl}search?order=desc&sort=relevance&intitle=${searchValue}&site=stackoverflow`
    return this.http.get<SearchData<Question>>(api)
  }

  getQuestionAnswers(id: number): Observable<SearchData<Answer>>{
    const api = `${environment.apiUrl}questions/${id}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`
   return this.http.get<SearchData<Answer>>(api)
  }

  getQuestionDetail(id: number):Observable<SearchData<Question>> {
    const api = `${environment.apiUrl}questions/${id}?order=desc&sort=activity&site=stackoverflow&filter=withbody`
    return this.http.get<SearchData<Question>>(api)
  }

}
