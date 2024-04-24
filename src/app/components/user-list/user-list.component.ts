import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  displayedColumns: string[] = ["name", "data", "status"];
  @Input({required: true}) usersList: IUser[] = [];

  @Output("userSelected") userSelectedEmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    console.log(user)

    this.userSelectedEmit.emit(user);
  }
}
