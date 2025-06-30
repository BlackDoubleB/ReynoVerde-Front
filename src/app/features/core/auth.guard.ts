import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { firstValueFrom} from 'rxjs';
import { AuthStateService } from '../services/auth/auth.service';
import { LoadingService } from '../services/state/loading.service';
export const privateGuard: CanActivateFn = async (route, state) => {
    const router = inject(Router);
    const authState = inject(AuthStateService);
    const loading = inject(LoadingService);

    loading.show();

    let response: boolean; 

    try{
      response = await firstValueFrom(authState.acceso());
    }catch(err){
      console.error('Error al verificar sesión (privateGuard):', err);
      router.navigateByUrl('/auth/login');
      loading.hide();
      return false;
    }

    if(!response){
      console.error('Error al verificar sesión (privateGuard): No tiene acceso');
      router.navigateByUrl('/auth/login');
      loading.hide();
      return false;
    }
    loading.hide();
    return true
   
  }

