import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  //courses: Course[] = [];
  displayedColumns = ['name','category'];

  //CoursesService: CoursesService;

  constructor(
    private CoursesService: CoursesService,
    public dialog: MatDialog) {
    // this.courses =[];
    //this.CoursesService = new CoursesService();
    this.courses$ = this.CoursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        console.log(error);
        return of([])
      })
    );

    //this.CoursesService.list().subscribe(courses => this.courses = this.courses )

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data:errorMsg,
    });
  }

  ngOnInit(): void {

  }

}
