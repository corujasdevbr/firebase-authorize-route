import React from 'react'
import './index.css'
import { useFormik } from 'formik';
import jwtEncode from 'jwt-encode';
import {db, auth} from '../../utils/firebaseConfig';
import { useHistory } from "react-router-dom";

const LoginPage = () => {
    const secretToken = 'secretToken';
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
          email: '',
          password : ''
        },
        onSubmit: values => {
          auth
            .signInWithEmailAndPassword(values.email, values.password)
            .then(result => {
                console.log(result.user.uid)
                db.collection('Atendentes')
                    .doc(result.user.uid)
                    .get()
                    .then(doc => {
                        let url = '';
                        let userToken = {
                            uid : result.user.uid,
                            name : result.user.name,
                            email : result.user.email
                        }

                        if (doc.exists) {
                            userToken.role = 'atendente'
                        } else {
                            userToken.role = 'cliente'
                        }

                        const jwt = jwtEncode(userToken, secretToken);
                        localStorage.setItem('token-firebase', jwt)
                        history.push('/' + userToken.role)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.error(error)
            })
        },
    });

    return (
        <>
            <main className="form-signin">
                <form onSubmit={formik.handleSubmit}>
                    <img className="mb-4" src="https://www.corujasdev.com.br/wp-content/uploads/2018/09/CorujasDev.png" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                    <input id="email"
                        name="email"
                        type="email"
                        className="form-control" 
                        placeholder="name@example.com" 
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                    </div>
                    <div className="form-floating">
                    <input type="password" 
                        className="form-control" 
                        id="password"
                        name="password"
                        placeholder="Password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}/>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
        </>
    )
}

export default LoginPage;