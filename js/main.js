import { emailToId} from './utils.js'
import {createUserData ,getUserData} from "./database.js";



window.TryRegister = (form)=>{
    getUserData().then((res)=>{
        Login(form)
        return false;
    }).catch((res)=> {
        console.log("Error Register: "+res)
        alert("Registro, Ha ocurrido un error, intente nuevamente.")
        return false;
    });
    return false;
}


const Login = (form)=>{
    createUserData(
        emailToId(form.elements['Email'].value),
        form.elements['NombreCompleto'].value,
        form.elements['Compania'].value,
        form.elements['Cargo'].value,
        form.elements['Email'].value,
        form.elements['Celular'].value,
        form.elements['Invitado'].value,
        form.elements['QuienInvita'].value
    ).then((res)=>{
        form.reset();
        document.getElementById('okForm').hidden=false;
    }).catch((e)=> {
        console.log("Error creando user: ",e);
        alert("Ha ocurrido un error, intente nuevamente.")
    })
}

