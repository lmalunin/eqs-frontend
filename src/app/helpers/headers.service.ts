import { HttpHeaders } from '@angular/common/http';

export const getHeaders = () => {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  };
