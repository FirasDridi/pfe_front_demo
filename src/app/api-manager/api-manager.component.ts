import { Component } from '@angular/core';
import { ServiceUsageService } from '../api-manager/ServiceUsageService';
import { ServiceDto } from '../api-manager/ServiceDto';

@Component({
  selector: 'app-api-manager',
  templateUrl: './api-manager.component.html',
  styleUrls: ['./api-manager.component.css'],
})
export class ApiManagerComponent {
  service: ServiceDto = {
    id: '',
    name: '',
    description: '',
    version: '',
    endpoint: '',
    status: true,
    configuration: '',
    pricing: '',
  };

  constructor(private serviceUsageService: ServiceUsageService) {}

  createService(): void {
    this.serviceUsageService.save(this.service).subscribe(
      () => {
        // Service created successfully
        // You can perform additional actions if needed, such as displaying a success message or clearing the form
        console.log('Service created successfully.');
        this.clearForm();
      },
      (error) => {
        // Handle error
        console.error('Error creating service:', error);
      }
    );
  }

  clearForm(): void {
    // Clear all form fields
    this.service = {
      id: '',
      name: '',
      description: '',
      version: '',
      endpoint: '',
      status: true,
      configuration: '',
      pricing: '',
    };
  }
}
