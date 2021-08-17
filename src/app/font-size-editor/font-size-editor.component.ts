import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  name1 = '<app-test></app-test>';
  name: string;
  fontSize = 24;
  constructor() { }

  ngOnInit() {
  }

  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
  showNotification() {
    this.name = 'hihi';
    alert(this.name);
  }
  change() {
    document.getElementById('hihi').innerHTML = this.name1;
  }

}
