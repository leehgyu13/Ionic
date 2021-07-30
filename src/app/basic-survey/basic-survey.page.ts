import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-survey',
  templateUrl: './basic-survey.page.html',
  styleUrls: ['./basic-survey.page.scss'],
})
export class BasicSurveyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goSkinSurvey() {
    this.router.navigate(['/skin-survey']);
  }

}
