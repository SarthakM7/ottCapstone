import { Injectable } from '@angular/core';

export type UserPay = {
  cn: number;
  cvv:number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor() { }
}
