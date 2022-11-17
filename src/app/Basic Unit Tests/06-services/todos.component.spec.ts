import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null); //new instance of todoservice, passing null instead of http
    component = new TodosComponent(service); //injecting the service into the component, so we can use that service etc
  });

  it('should set todos property with items returned from the server', () => {
    //we use SpyOn to get control over a method in a class, we can check if that method has been called, change the implementation of that method etc
    //first arg is the object (service), second is the method in the object 'getTodos'.
    //getTodos is a method with no params which returns an observable
    //callFake allows us to change the implementation of this method.

    //arrange

    let faketodos = [1,2,3];

    spyOn(service, 'getTodos').and.callFake(() => {   //the whole point of this is the replicate the TodoService and the 'getTodos'
      return Observable.from([faketodos])               //method within it without actually using the service
    });                                               //this method has no params and returns an observable (look at method in the service)

    //act
    component.ngOnInit();

    //assertion
    expect(component.todos).toBe(faketodos);     //we are checking that what we have in the initialised 'todos' is the same as the fake
  });                                           //todos from fetched from the service

  //so here, we setting the fake todos that we get from our service, and seeing if the component, sets the "todo" array to
  //the fake todo

  //we are just testing here if the add action is called on the service when we do the add method on the component

    //arrange
     it('should call the server to save the changes when a new todo item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {                                         //we replicate the add, so add takes in argument t and then returns an observable
      return Observable.empty;
    });

    //act
    component.add();

    //assertion
    expect(spy).toHaveBeenCalled();

  });

      //we want to see if the new todo that is returned from the server is added.

    //arrange
     it('should call the server to save the changes when a new todo item is added', () => {
    let testTodo = {id: 1}
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([testTodo]));   //we replicate the add, so add takes in argument testTodo and then returns an observable, we do it without an arrow function

    //act
    component.add();

    //assertion - we ensure that this this todo object which is returned from the server is in our todo's array, after we have called.
    expect(component.todos.indexOf(testTodo)).toBeGreaterThan(-1);

  });

  //third test, if the service returns an error, check that that error is within the error property

  //arrange
  it('should set the message property if server returns an error when adding a new todo ', () => {
    let error = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throwError(error));

  //act
  component.add();

  //assertion - we expect the component error message to be the error that is thrrown here;
  expect(component.message).toBe(error);
  });
});
