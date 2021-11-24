import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, take, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';
  //private readonly API = '/assets/acourses.json'; //teste de conexao

  constructor(private HttpClient: HttpClient) { }

  list() {
    return this.HttpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      //delay(5000), //Delay de carregamento p/teste.
      tap(courses => console.log(courses))
    );
  }
}
