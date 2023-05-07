import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs";
import { UserDetails } from "src/app/models/users/user";
import { LoadingService } from "src/app/services/loading/loading.service";
import { UserService } from "src/app/services/users/userService";

@Component({
    selector: 'edit-customer-component',
    templateUrl: './editCustomer.component.html',
    styleUrls: ['./editCustomer.component.scss']
})

export class EditCustomerComponent {

    id: string = "";
    userFormData: UserDetails | undefined;
    isLoading = this.loadingService.loading$;

    constructor(private userService: UserService, 
        private router: Router, 
        private loadingService: LoadingService,
        private route: ActivatedRoute,
        ) {}
    
    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
        });

        if (this.id) {
            this.userService.getUserData(this.id).subscribe(res => {
                this.userFormData = res;
            })
        };
    }

    updateUser(userData: UserDetails): void {
        this.loadingService.show();
        this.userService.updateUser(userData)
        .pipe(finalize(() => {
            this.loadingService.hide();
        }))
        .subscribe(() => {
            this.router.navigate(['/employee/customer']);
        });
    }
}