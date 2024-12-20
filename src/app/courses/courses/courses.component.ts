
import { Component } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './service/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    this.courses = this.coursesService.list();
  }

}
