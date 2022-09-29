
import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
    //here we are emitting an event called voteChanged and passing the totalVotes (which have been incremented)
  }
}
