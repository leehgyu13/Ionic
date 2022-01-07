import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skin-diary',
  templateUrl: './skin-diary.page.html',
  styleUrls: ['./skin-diary.page.scss'],
})
export class SkinDiaryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  diagnosis() {
    this.router.navigate(['/diagnosis']);
  }
}
