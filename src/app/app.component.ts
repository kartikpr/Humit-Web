import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Humit';

  constructor(private router: Router) { }

  ngOnInit() {

    if (environment.production) {
      if (location.protocol === 'http:') {
        window.location.href = location.href.replace('http', 'https');
      }
    }
    const target = document.querySelector('.tw')


    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'white',
      typeSpeed: 100,
      deleteSpeed: 200,
      cursorColor: '#9592FF'

    })

    writer.type('discovery').rest(500).remove(9).type('sharing').rest(200).start()


  }

  gotoForm() {
    this.router.navigate(['https://forms.gle/f4sT8yZabUYRjEEa7']);
  }

}
