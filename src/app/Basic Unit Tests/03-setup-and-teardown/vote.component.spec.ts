import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {

  //ARRANGE - where we initialise the system under test, so creating an instance of votecomponent
  let component: VoteComponent;
  beforeEach(() => {  // we use this to initialise our components beforeEach test
    component = new VoteComponent();
    //in automated testing terms what we write in this function is reffered to as set up
  });

  // afterEach(() => {
  //  //this is where add our cleanup code after each test.
  // //in automated testing terms what we write in this function is reffered to as tear down.
  // });

  // beforeAll - which is executed once before all tests.
  // afterAll - which is executed ONCE after all tests.

  it('should increment totalVotes when upvoted', () => {

    //ACT - calling a method of function
    component.upVote();
    //assertion -
    expect(component.totalVotes).toBe(1);
  });

  //each test should run in isolation (as if there arent any other test), here we don't want side effects with on test effecting another:
  it('should decrease totalVotes when downvoted', () => {

    //ACT - calling a method of function
    component.downVote();
    //ASSERTION-
    expect(component.totalVotes).toBe(-1);
  });
});
