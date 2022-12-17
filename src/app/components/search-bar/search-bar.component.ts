import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
 
   @Input() searchValue: string = ''
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  clickSearch() {
    if(this.searchValue){
      this.goToSearch(this.searchValue)
    }
    
  }

  goToSearch(searchValue: string){
    this.router.navigate(['results'], {queryParams: {q: searchValue}})
   
  }

}
