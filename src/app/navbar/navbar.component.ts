import { Component } from '@angular/core';
import { notes } from 'src/dummyData';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  allNotes = [...notes];
  allTags = this.allNotes.map(t => t.tags).flat();
  uniqueTags = [...new Set(this.allTags)];

  selectedTags = [];

  chooseTag(event){
    this.selectedTags.push(event.target.value);
    console.log(this.selectedTags)
  }
}
