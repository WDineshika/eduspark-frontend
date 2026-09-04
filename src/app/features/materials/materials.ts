import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // 1. Import ChangeDetectorRef
import { CommonModule } from '@angular/common';

import { StudyMaterial } from '../../models/study-material';
import { StudyMaterialService } from '../../services/study-material.service';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials.html',
  styleUrl: './materials.css'
})
export class Materials implements OnInit {

  materials: StudyMaterial[] = [];

  // 2. Inject it into your constructor
  constructor(
    private materialService: StudyMaterialService,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.loadMaterials();
  }

  loadMaterials(): void {
    this.materialService.getAllMaterials().subscribe({
      next: (data) => {
        this.materials = data;
        this.cdr.detectChanges(); // 3. Force Angular to detect changes and render the cards immediately
      },
      error: (err) => {
        console.error('Error loading materials', err);
      }
    });
  }

  download(material: any) {
    window.open(
      'http://localhost:8080' + material.fileUrl,
      '_blank'
    );
  }
}