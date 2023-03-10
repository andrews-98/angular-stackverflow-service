import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  goToSearch(searchValue: string){
    this.router.navigate(['results'], {queryParams: {q: searchValue}})
  }
}
