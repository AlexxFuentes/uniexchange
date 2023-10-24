import SigninAuthClient from './signin-auth-client'

export async function SigninAuthServer() {
    //const providers = await getProviders();

    const providers = {
        
    }

    console.log(providers);

    // return {
    //     props: {
    //         providers,
    //     },
    // };

    return <SigninAuthClient providers={providers} />
}