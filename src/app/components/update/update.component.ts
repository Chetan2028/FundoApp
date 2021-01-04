import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteserviceService } from '../../services/noteService/noteservice.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  title;
  description;
  id;
  pin;
  constructor(
    private noteService: NoteserviceService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(" note data in update", data);
    this.title = data.note.title,
      this.description = data.note.description
      this.id=data.note.id

  }

  ngOnInit(): void {
  }

  updateNote(data1) {

    let data = {
      noteId: this.id,
      // title: card.card.title,
      title: this.title,
      description: this.description,
      
    }
    console.log("printing ", data );
    

    this.noteService.updateNote(data).subscribe((response) => {
      console.log(" updated successfull", response);
      this.onNoClick();

    })

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
