import { AfterViewInit, Injectable } from '@angular/core';
import { WordListModel } from '../page/table/components/word-list/word-list-model/word-list-model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService  implements AfterViewInit {
  ngAfterViewInit(): void
  {
    throw new Error('Method not implemented.');
  }

}
