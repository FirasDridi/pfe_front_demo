import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceDto } from '../../api-manager/ServiceDto';
import { ServiceUsageService } from '../../api-manager/ServiceUsageService';


@Component({
  selector: 'app-all-service',
  templateUrl: './all-service.component.html',
  styleUrls: ['./all-service.component.css']
})
export class AllServiceComponent {

editing = false;
  dataSource: MatTableDataSource<ServiceDto> =
    new MatTableDataSource<ServiceDto>();
  displayedColumns: string[] = [

    'name',
    'description',
    'version',
    'endpoint',
    'status',
    'configuration',
    'pricing',
    'actions',
  ];
  constructor(private serviceUsageService: ServiceUsageService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceUsageService.findAllDtos(true, 0, 10).subscribe((data: any) => {
      this.dataSource.data = data.content;
    });
  }
  deleteService(service: ServiceDto): void {
    this.serviceUsageService
      .deleteService(!service.id ? '' : service.id)
      .subscribe(
        () => {
          // Remove the deleted service from the dataSource
          this.dataSource.data = this.dataSource.data.filter(
            (s) => s !== service
          );
          console.log('Service deleted successfully.');
        },
        (error) => {
          console.error('Error deleting service:', error);
        }
      );
  }
  activateService(serviceUsageId: string): void {
    this.serviceUsageService.activateService(serviceUsageId).subscribe(
      () => {
        console.log('Service activated successfully');
        this.loadServices(); // Refresh the service list
      },
      (error) => {
        console.error('Error activating service:', error); // Log error
      }
    );
  }

  deactivateService(serviceUsageId: string): void {
    this.serviceUsageService.deactivateService(serviceUsageId).subscribe(
      () => {
        console.log('Service deactivated successfully');
        this.loadServices(); // Refresh the service list
      },
      (error) => {
        console.error('Error deactivating service:', error);
      }
    );
  }
  toggleServiceStatus(checked: boolean, service: ServiceDto): void {
    console.log('Toggling service status:', service);

    // Invert the status
    service.status = checked;
    console.log('New service status:', service.status);

    // Check if the service ID is defined before calling the service methods
    if (service.id) {
        // Call the appropriate service method to update the status
        if (service.status) {
            this.serviceUsageService.activateService(service.id)
                .subscribe(
                    () => {
                        console.log('Service activated successfully');
                        this.loadServices(); // Refresh the service list after activation
                    },
                    (error) => {
                        console.error('Error activating service:', error);
                        // Reset the status to its original value in case of an error
                        service.status = !service.status;
                    }
                );
        } else {
            this.serviceUsageService.deactivateService(service.id)
                .subscribe(
                    () => {
                        console.log('Service deactivated successfully');
                        this.loadServices(); // Refresh the service list after deactivation
                    },
                    (error) => {
                        console.error('Error deactivating service:', error);
                        // Reset the status to its original value in case of an error
                        service.status = !service.status;
                    }
                );
        }
    } else {
        console.error('Service ID is undefined.');
    }
}

}

