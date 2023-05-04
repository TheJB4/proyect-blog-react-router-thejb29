import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BlogContext } from "../context";

const FormEdit = () => {
    let { onEdit,user } = React.useContext(BlogContext);
    let [accept, setAccept] = React.useState(false);
    let { username, age, city, fullname,role } = useLocation().state;
    let [data, setDatta] = React.useState(useLocation().state);


    let navigate = useNavigate()

    let setChanges = (e) => {
        e.preventDefault();
        onEdit(data,username)
        navigate('/myprofile')
    };

    if (accept) {
        return (
            <form onSubmit={setChanges}>
                <input 
                    type="text" 
                    placeholder="username" 
                    defaultValue={username} 
                    onChange={(e)=> setDatta({
                        ...data,
                        username: e.target.value
                    })}
                />
                <input 
                    type="text" 
                    placeholder="age" 
                    defaultValue={age} 
                    onChange={(e)=> setDatta({
                        ...data,
                        age: e.target.value
                    })}
                />
                <input 
                    type="text" 
                    placeholder="city" 
                    defaultValue={city} 
                    onChange={(e)=> setDatta({
                        ...data,
                        city: e.target.value
                    })}
                />
                <input 
                    type="text" 
                    placeholder="fullname" 
                    defaultValue={fullname} 
                    onChange={(e)=> setDatta({
                        ...data,
                        fullname: e.target.value
                    })}
                />
                <input 
                        type="text" 
                        disabled={user.role != "ADMIN" ? 'disabled' : null}
                        placeholder="role" 
                        defaultValue={role} 
                        onChange={(e)=> setDatta({
                        ...data,
                        role: e.target.value
                    })}
                />
                <button type="submit">Aplicar cambios</button>
            </form>
        );
    } else {
        return (
            <>
                <h2>Estas segura que quieres editar?</h2>
                <button onClick={() => setAccept(true)}>Aceptar</button>
                <button onClick={() => setAccept(false)}>Cancelar</button>
            </>
        );
    }
};

export default FormEdit;
