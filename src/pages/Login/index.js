import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from "../../config/auth/auth";

import './Login.css';
import logo from '../../assets/leanredmine-logo.svg';
import illustration from '../../assets/pale-waiting.png';
import { Button, Input } from 'antd';

export default function Login(props) {

    const [apiKey, setApiKey] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const { setAuthToken } = useAuth();

    const referer = props.location.state.referer || "/";
    
    async function postLogin() {
        
            await api({

                method: 'get',
                url: '/users/current.json',

                headers: { 'X-Redmine-API-Key': apiKey },
                params: { 'include': 'memberships' }

                }).then(result => {

                    if (result.status === 200) {
                        setAuthToken(apiKey);
                        localStorage.setItem("leanRedmineUser", result.data.user.firstname);
                        localStorage.setItem("userId", result.data.user.id);
                        localStorage.setItem("userMemberships",
                            result.data.user.memberships.map(membership => membership.project.id)
                        );
                        setLoggedIn(true);
                    } else {
                        setIsError(true);
                    }

                }).catch(e => {
                setIsError(true);
            });

    }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

        return (
    
            <>
                <div id='container'>
                    <div id='sideComposition' style={{'backgroundImage': "url("+illustration+")"}}>
                        <header>
                            <img id='logo' src={logo} alt='Lean Redmine logo' />
                            <h2>Mantenha-se a par dos projetos desenvolvidos em sua organização de forma simples.</h2>
                        </header>
                    </div>
                    <div id='form'>
                        <img id='formLogo' src={logo} alt='Lean Redmine logo' />
                        <h2>Faça login no LeanRedmine</h2>
                        <p>Insira no campo abaixo a sua chave API do Redmine.</p>
                        <form>
                            <Input type="text" size="large" style={{'marginBottom':'20px'}} value={apiKey} onChange={e =>{setApiKey(e.target.value)}} placeholder=""></Input>
                            <Button type="primary" size="large" icon="login" onClick={postLogin}>Fazer login</Button>
                        </form>
                        <p id='helpText'>Caso não saiba o que é uma chave API, peça ajuda ao responsável pelo sistema.</p>
                        <p className='warning' style={{'display': isError}}>A chave API inserida não é válida.</p>
                    </div>
                </div>
            </>  
        )
}
