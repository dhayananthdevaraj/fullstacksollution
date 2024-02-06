import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {


  eventForm: FormGroup;
  rental: VacationRental
  photoImage="";
  errorMessage = '';

  constructor(private fb: FormBuilder, private vacationRentalService: VacationrentalService, private route:Router) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      propertyType: ['', Validators.required],
      noOfBedroom: ['', Validators.required],
      location: ['', Validators.required],
      pricePerDay: ['', Validators.required],
      photo: [null, Validators.required],
    });
  }

  propertyTypes = ['House', 'Apartment', 'Villa', 'Cabin', 'Condo', 'Other'];

  onSubmit() {
    if (this.eventForm.valid) {
      // Call the service method to post the product
      console.log(this.eventForm.value);
      //pass userid from local storage
      // this.eventForm.value.userId=localStorage.getItem('userId');
      this.rental = new VacationRental();
      this.rental.title = this.eventForm.get('title').value;
      this.rental.propertyType = this.eventForm.get('propertyType').value;
      this.rental.description = this.eventForm.get('description').value;
      this.rental.noOfBedroom = this.eventForm.get('noOfBedroom').value;
      this.rental.amenities = this.eventForm.get('amenities').value;
      this.rental.location = this.eventForm.get('location').value;
      this.rental.pricePerDay = this.eventForm.get('pricePerDay').value;
      this.rental.photo = this.photoImage;
      this.rental.userId = localStorage.getItem('userId');
      this.vacationRentalService.addVacationRental(this.rental).subscribe(
        (response) => {
          // Handle success if needed
          console.log('rental added successfully', response);
          this.eventForm.reset(); // Reset the form
          this.route.navigate(['/organiser-dashboard']);
        },
        (error) => {
          // Handle error if needed
          console.error('Error adding product', error);
        }
      );
    }else{
      this.errorMessage = "All fields are required"
    }
  }

  handleFileChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.convertFileToBase64(file).then(
        (base64String) => {
          this.photoImage=base64String
        },
        (error) => {
          console.error('Error converting file to base64:', error);
          // Handle error appropriately
        }
      );
    }
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result as string);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  goBack() {
    // Navigate to the dashboard or any desired route
    this.route.navigate(['/owner-dashboard']);
  }


}
