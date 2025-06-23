import { CanActivateFn, Router } from "@angular/router"
import { inject } from "@angular/core";
import { map } from "rxjs";
import { AuthStateService } from "../../services/auth/auth.service";

export const privateGuard = (): CanActivateFn => {
    return () =>{
        const router = inject(Router);
        const authState = inject(AuthStateService);
        return authState.acceso().pipe(
            map((state)=>{
                if(!state){
                    router.navigateByUrl('/auth/login');
                    return false;
                }
                return true;
            })
        )
    }
}