import { Component } from '@angular/core';

@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  newNoteText: String = '';

  // updateNewNoteText(event: any){
  //   this.newNoteText = event.target.value;
  // }
}
