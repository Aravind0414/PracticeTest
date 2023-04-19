import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SubscriptionDataService } from '../../data-services/subscriptions.data-service';
import { UserDataService } from '../../data-services/users.data-service';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectorComponent {
  _users$: Observable<User[]> = this.userDataService.getUsers();
   
  constructor(
    private userDataService: UserDataService,
    private subscService: SubscriptionDataService
  ) {}

   
}
