import { Component } from '@angular/core';
import { notes } from 'src/dummyData';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  allNotes = [...notes];
  completedNotes =[];
}
