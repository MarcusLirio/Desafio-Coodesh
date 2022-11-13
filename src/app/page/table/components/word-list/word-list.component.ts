import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'word-list',
  templateUrl: './word-list.component.html',
})
export class WordListComponent implements AfterViewInit, OnInit{

  
  displayedColumns: string[] = ['word'];

  data:any[] = [];


  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor() {}

  text: any;
  btn:any
   ngOnInit(): void
  {
    const button = document.querySelector('button');
    button?.addEventListener('click', () => {
      if (button.value !== null) {
        return button.value = this.text
      }
      else{
        console.log('deu merda')
      }
    });
  }

  async teste(){
    setTimeout(() => {
      const a = document.addEventListener('click', () =>{
        if(a != null){
          console.log('merda')
        }
      })
      
    },2000)
  }


  async ngAfterViewInit(): Promise<void> {
     setTimeout(async () => {
      this.data = await this.getUsers().then( (x) => {
        this.isLoadingResults = false;
        this.isRateLimitReached = this.data === null;
        return x.slice(0, 100)
      });
      console.log(this.data)
     }, 1000);   
    }
  
  async getUsers(): Promise<Array<any>>{
    
    try {
      const res = await fetch('http://localhost:3000/data');
      return await res.json();
    } catch (err) {
      throw new Error();
    }
  }


  urlWord() {
    alert('oi')
  }
}
