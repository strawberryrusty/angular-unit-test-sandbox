import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
   component = new TodoFormComponent(new FormBuilder());


  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy;
    expect(component.form.contains('email')).toBeTruthy;
  });

  it('should make the name control required', () => {
    //with this we can get a particular form control inside this form group
    let control = component.form.get('name');

    //set the value of that form control to be nothing, this way we can expect it to be falsey
    control.setValue('');

    expect(control.valid).toBe(false);
  });
});
