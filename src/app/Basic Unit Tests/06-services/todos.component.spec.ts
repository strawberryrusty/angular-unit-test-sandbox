import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


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
    let todos = [1,2,3];

    spyOn(service, 'getTodos').and.callFake(() => {   //the whole point of this is the replicate the TodoService and the 'getTodos'
      return Observable.from([todos])               //method within it without actually using the service
    });

    component.ngOnInit();

    //assertion

    expect(component.todos).toBe(todos);
  });
});
