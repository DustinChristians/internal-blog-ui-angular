import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Entry } from '../content/content.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private router: Router) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      errorMessage = `Server returned code: ${
        error.status
      }, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  isEntryError(entry: Entry<any>) {
    if (entry == null) {
      this.router.navigate(['/404'], { skipLocationChange: true });
      return true;
    }
    return false;
  }
}
