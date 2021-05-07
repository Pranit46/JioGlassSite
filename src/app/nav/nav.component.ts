import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  header_variable = false;
  Secondheader_variable = false;

/*  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true;
    }
    else{
      this.header_variable=false;
    }
  }
  */

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable=true;
      this.Secondheader_variable=true;
    }
    else{
      this.header_variable=false;
      this.Secondheader_variable=false;
    }
  }



 


  images = [
    { stuId: '../assets/images/Group6571.svg', Name:'Why to DEVELOP?' },
    { stuId: '../assets/images/Iconquestionmark.svg', Name:'How to DEVELOP?' },
    { stuId: '../assets/images/Icondownload.svg', Name:'DOWNLOADS' },
    { stuId: '../assets/images/Iconusers.svg', Name:'COMMUNITY' },
    { stuId: '../assets/images/Icondownload1.svg', Name:'SIGN in / SIGN UP' }

  ]

}
