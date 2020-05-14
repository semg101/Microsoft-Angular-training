import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitSearch } from './git-search'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService]
})
export class AppComponent implements OnInit{
  searchResults: GitSearch;
  searchQuery: string;
  constructor(private GitSearchService: GitSearchService) {

  }

  /**ngOnInit() {
    this.GitSearchService.gitSearch('angular').then( (response) => {
      alert("Total Libraries Found:" + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }**/

  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then((response) => {
      this.searchResults = response;
      
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }


  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error: " + error.statusText)
    })
  }

  title = 'app is functional!';
}
