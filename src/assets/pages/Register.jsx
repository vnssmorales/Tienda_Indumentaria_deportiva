import { useState } from "react";

const Register = (onRegister) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        onRegister({ username, email, password });
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Nombre:
                    <input type="name" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                    Email:
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                    Password:
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Register</button>
            </form>
        </div>
    )
};

export default Register;