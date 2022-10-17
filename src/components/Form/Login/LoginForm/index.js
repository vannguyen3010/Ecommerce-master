import React from 'react';
import './index.scss';
import { useSnackbar } from 'notistack';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';

function LoginForm({ handleCloseModal }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [userdata, setUserdata] = useState('');
    const usernameRef = useRef();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const validateAll = () => {
        const msg = {};
        //mail
        if (username.trim() === '') {
            msg.usernameInput = '*Please enter your username';
        }
        // password
        if (password.trim() === '') {
            msg.passwordInput = '*Please enter your password';
        }
        setErrorMsg(msg);
        return !Object.keys(msg).length > 0;
    };

    useEffect(() => {
        const getUserdata = async () => {
            const response = await fetch('https://e-commerce-users-data.herokuapp.com/user');
            setUserdata(await response.json());
        };
        getUserdata();
    }, []);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const isValidate = validateAll();
        if (isValidate) {
            const data = { username, password };
            const existAccount = userdata.filter((x) => {
                return x.username === data.username && x.password === data.password;
            });
            if (existAccount.length === 1) {
                enqueueSnackbar('Signed in successfully', { variant: 'success' });
                const [currentAccount] = existAccount;
                dispatch(login(currentAccount));
                localStorage.setItem('currentUser', JSON.stringify({ user: currentAccount, login: true }));
                handleCloseModal();
            } else {
                enqueueSnackbar('Please try again', { variant: 'error' });
            }
        } else return;
    };

    return (
        <form className="login__form" onSubmit={handleLoginSubmit}>
            <h3 className="form__title">Login</h3>
            <div className="mg-t">
                <label className="form__label">Your username</label> <br />
                <input
                    className="form__input"
                    ref={usernameRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                <p className="form__errorMsg">{errorMsg.usernameInput}</p>
            </div>
            <div className="mg-t">
                <label className="form__label">Password</label> <br />
                <input
                    className="form__input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <p className="form__errorMsg">{errorMsg.passwordInput}</p>
            </div>
            <button type="submit" className="form__submit__btn">
                Sing in
            </button>
        </form>
    );
}

export default LoginForm;
