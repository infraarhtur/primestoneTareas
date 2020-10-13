import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[post] Edit ';
export const UPVOTE = '[post] Upvote ';
export const DOWNVOTE = '[post] Downvote ';
export const RESET = '[post] Reset ';



export class EditText implements Action {
  readonly type = EDIT_TEXT;
  constructor (public payload:string){

  }
}

export class Upvote implements Action {
  readonly type = UPVOTE;

}

export class Downvote implements Action {
  readonly type = DOWNVOTE;

}

export class Reset implements Action {
  readonly type = RESET;

}

export type all  = Upvote | Downvote | Reset | EditText
