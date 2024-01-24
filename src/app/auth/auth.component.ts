import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AuthResponseData, AuthService } from "./auth.service";
import { AlertModalComponent } from "../shared/alert-modal/alert-modal.component";
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";
@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  modalSub: Subscription = new Subscription();
  private sub: Subscription = new Subscription();
  @ViewChild(PlaceHolderDirective) alertHost: PlaceHolderDirective;
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      this.isLoading = true;

      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(["/recipes"]);
      },
      (error) => {
        this.error = error;
        this.showErrorAlert(error);
        this.isLoading = false;
      }
    );
    form.reset();
  }

  handleError() {
    this.error = null;
  }

  showErrorAlert(error: string) {
    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        AlertModalComponent
      );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = error;
    this.modalSub = componentRef.instance.close.subscribe(() => {
      this.modalSub.unsubscribe();
      console.log("close");
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
