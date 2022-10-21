import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise the voteChange event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(tv => {
      totalVotes = tv });

    component.upVote();

    //assertion part: 
    // expect(totalVotes).not.toBeNull(); //this is too generic, there could be a bug which doesnt pass the number in the event emitter
    expect(totalVotes).toBe(1);
  });
});
