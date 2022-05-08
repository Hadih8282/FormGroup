import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {
    static cannotContaintSpace(control: AbstractControl): ValidationErrors | null {
        
            console.log(control.value);
            if (control.value?.indexOf(' ') >= 0){
                return { cannotContaintSpace: true };
            }    
            return null; 
        
    }

    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
        if (control.value == 'hadi') {
            return { shouldBeUnique: true };
        }
        return null;  
    }

    static shouldBeUniquetime(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (control.value === 'hadi') {
                    console.log(control.value);
                    
                    resolve( { shouldBeUniquetime: true });
                    console.log({ shouldBeUniquetime: true });

                }else{
                    console.log('hhhhh');
                    resolve(null);
                }    
            }, 2000);      
            
        });
        
    }
    
    


}



// export function AgeValidator(
//     control: AbstractControl
//   ): ValidationErrors | null {
//     if ((control.value as string ).indexOf('') >= 0) {
//       return { age: true };
//     }
//     return null;
//   }