import { Component } from '@angular/core';


@Component({
  selector: 'app-view-testresults',
  templateUrl: './view-testresults.component.html',
  styleUrls: ['./view-testresults.component.css']
})
export class ViewTestresultsComponent {
  searchText: string;
  filters: Object;
  userName = "";
  ngOnInit(): void {
  }
}
