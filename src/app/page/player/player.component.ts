import { AfterViewInit, Component, Input, OnInit, } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { WordListModel } from '../table/components/word-list/word-list-model/word-list-model';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements AfterViewInit{
 
  
  data:WordListModel[] | WordListModel | void = [];

  audio:any = [];

  public words!:string;
  public text!: string;
  public verbs!: string;
  public musica:any;

  async ngAfterViewInit(): Promise<void> {

    this.data = await this.getUsers().then( (x) => {
      return x[0];
    });

    this.audio = this.data
    this.dictionary();
  }

  public dictionary(){

      this.words = this.audio.word
      this.text = this.audio.phonetics[1].text
      this.verbs = this.audio.meanings[0].definitions[0].definition
  }

   public music(){
    let audio = new Audio();
    audio.src = this.audio.phonetics[1].audio;
    audio.load();
    audio.play();
  }  

  async getUsers(): Promise<WordListModel[]>{
    
    try {
      const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + 'thanks');
      return await res.json();
    } catch (err) {
      throw new Error();
    }
  }

}

