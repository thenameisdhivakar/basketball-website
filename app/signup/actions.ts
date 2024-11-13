// 'use server'

// import {SignupFormSchema} from '@/app/_lib/definitions'
// export async function signup(state: any, formData: { get: (arg0: string) => any }){
// const validationResult = SignupFormSchema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     password: formData.get('password'),
// })
// if(!validationResult.success){
//     return {
//         errors: validationResult.error.flatten().fieldErrors,
//     }
// }
// }