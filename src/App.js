import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp';

import UserHandler from './handler/User';

import './App.css';

function App() {
    const [userName, setUserName] = useState('');
    const [description, setDescription] = useState('');
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {}, []);

    const handleRegisterUser = async () => {
        if (await UserHandler.create({ userName, description, id, password })) {
            alert('회원가입 성공');
        } else {
            alert('회원가입 실패');
        }
    };

    const handleGetUserList = async () => {
        if (await UserHandler.getList()) {
            alert('회원 리스트 불러오기 성공');
        } else {
            alert('회원 리스트 불러오기 실패');
        }
    };

    return (
        <div className='app-container'>
            <div>
                <TextField
                    label='이름'
                    variant='standard'
                    fullWidth
                    required={true}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label='소개'
                    variant='standard'
                    fullWidth
                    required={true}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label='아이디'
                    variant='standard'
                    fullWidth
                    required={true}
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    label='비밀번호'
                    variant='standard'
                    fullWidth
                    required={true}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <Button
                    fullWidth
                    onClick={() => {
                        handleRegisterUser();
                    }}
                >
                    회원 가입
                </Button>
                <Button
                    fullWidth
                    onClick={() => {
                        handleGetUserList();
                    }}
                >
                    회원 가져오기
                </Button>
            </div>
            <div>
                <SignUp />
            </div>
        </div>
    );
}

export default App;
