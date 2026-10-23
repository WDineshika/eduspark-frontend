import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { StudyMaterial } from '../models/study-material';

@Injectable({
  providedIn: 'root'
})
export class StudyMaterialService {

 private apiUrl = 'https://eduspark-backend-9f5a6.containers.snapdeploy.app/api/materials';

  constructor(private http: HttpClient) { }

  getAllMaterials(): Observable<StudyMaterial[]> {
    return this.http.get<StudyMaterial[]>(this.apiUrl);
  }

}
