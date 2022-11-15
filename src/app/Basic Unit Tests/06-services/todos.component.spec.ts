import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';


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
    expect(component.todos).toBe(faketodos);
  });

  //so here, we setting the fake todos that we get from our service, and seeing if the component, sets the "todo" array to
  //the fake todo

//   it('should call the server to save the changes when a new todo item is added', () => {
//     let spy = spyOn(service, 'add').and.callFake(t => {
//       return Observable.empty;
//     });

//   it('should add the new todo returned from the server', () => {
//     let todo = {id: 1};
//     let spy = spyOn(service, 'add').and.callFake(t => {
//       return Observable.from([todo]);
//     });

//     component.add();

//     expect(spy).toHaveBeenCalled();
//   });
// }
});
