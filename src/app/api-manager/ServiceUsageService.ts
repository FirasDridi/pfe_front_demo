import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceDto } from './ServiceDto';
import { SimpleBaseController } from '../base/base.service';
import { APP_CONFIG } from '../base/config/app.config';

@Injectable({
  providedIn: 'root',
})
export class ServiceUsageService extends SimpleBaseController<
  ServiceDto,
  ServiceDto,
  ServiceDto
> {
  private baseUrl = 'http://localhost:8081/service/api/services'; // Remplacez par l'URL de votre API

  constructor(private injector: Injector) {
    super(injector);
    this.endpointService = APP_CONFIG.apiBaseUrl + '/services';
  }

  getAllServices(): Observable<ServiceDto[]> {
    return this.http.get<ServiceDto[]>(`${this.baseUrl}/list`);
  }

  getServiceById(id: string): Observable<ServiceDto> {
    return this.http.get<ServiceDto>(`${this.baseUrl}/fetch/${id}`);
  }

  createService(service: ServiceDto): Observable<ServiceDto> {
    return this.http.post<ServiceDto>(`${this.baseUrl}`, service);
  }

  updateService(id: string, service: ServiceDto): Observable<ServiceDto> {
    return this.http.put<ServiceDto>(`${this.baseUrl}/uuid/${id}`, service);
  }

  deleteService(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/uuid/${id}`);
  }
  activateService(serviceUsageId: string): Observable<string> {
    return this.http.patch<string>(
      `${this.baseUrl}/${serviceUsageId}/activate`,
      null
    );
  }

  deactivateService(serviceUsageId: string): Observable<string> {
    return this.http.patch<string>(
      `${this.baseUrl}/${serviceUsageId}/deactivate`,
      null
    );
  }
}
