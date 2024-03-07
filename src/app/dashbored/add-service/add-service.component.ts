import { ServiceUsageService } from './../../api-manager/ServiceUsageService';
import { Component } from '@angular/core';


import { ServiceDto } from '../../api-manager/ServiceDto';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent {
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

  constructor(private ServiceUsageService: ServiceUsageService) {}

  createService(): void {
    this.ServiceUsageService.save(this.service).subscribe(
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
