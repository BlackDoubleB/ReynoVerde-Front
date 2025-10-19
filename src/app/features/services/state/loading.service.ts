import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
    })
export class LoadingService {
    private _loading: boolean = false;

    private susLoading = new Subject<boolean>()
    public obsLoading = this.susLoading.asObservable();
    

    get loading(): boolean {
        return this._loading;
    }

    set loading(value: boolean) {
        this._loading = value;
    }

    show() {
        this.loading = true;
        this.susLoading.next(this.loading);
    }

    hide() {
        this.loading = false;
        this.susLoading.next(this.loading);
    }

    toogle(){
        this.loading = !this.loading;
        this.susLoading.next(this.loading);
    }
}