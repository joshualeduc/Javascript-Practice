import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
	selector: 'session-list',
	templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
	@Input() sessions:ISession[];
	@Input() filterBy: string;

	ngOnChanges() {
		if(this.sessions) {
			this.filterSessions(this.filterBy);
		}
	}

	filterSessions(filter) {
		if(filter === 'all') {

		} else {

		}
	}
}
