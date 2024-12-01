import { useGoogleLogin } from '@react-oauth/google';

function Login() {
    const baseurl = import.meta.env.VITE_URL_BASE;
    const responseGoogle = async (response) => {
        try {
            if (response['code']) {
                const res = await fetch(`${baseurl}auth/login`)
                console.log(res)
            }
        } catch (error) {
            console.error(error);
        }
    }
    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'authCode',
    })
    return (
        <div>
            <h1>Login with google</h1>
            <button onClick={googleLogin} type="submit">Login with Google</button>

        </div>
    );
}

export default Login;