import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('header').addClass('transparent');
      } else {
        $('header').removeClass('transparent');
      }
    });
    $('.menu a').click(function () {
      $('.hide-menu-btn').click();
    });



  }

}
