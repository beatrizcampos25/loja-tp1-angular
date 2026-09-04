import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  info(msg:string, extra?:unknown){
    console.info(msg, extra ?? '');

  }

  warn(msg:string, extra?:unknown){
    console.warn(msg, extra ?? '');
  }

  error(msg:string, extra?:unknown){
    console.error(msg, extra ?? '');
  }
  
}
