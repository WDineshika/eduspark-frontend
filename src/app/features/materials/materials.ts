import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  subject: string = '';

  constructor(
    private materialService: StudyMaterialService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subject = this.route.snapshot.paramMap.get('subject') || '';

    console.log('Selected subject:', this.subject);

    this.loadMaterials();
  }

  loadMaterials(): void {
    this.materialService.getAllMaterials().subscribe({
      next: (data) => {
        this.materials = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading materials', err);
      }
    });
  }

   download(material: any) {
    window.open(
      'https://eduspark-backend-9f5a6.containers.snapdeploy.app' + material.fileUrl,
      '_blank'
    );
  }
}
