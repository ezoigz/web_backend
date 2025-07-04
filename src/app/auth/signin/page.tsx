import AuthHeader from "@/features/auths/components/auth_header"
import AuthForm from "@/features/auths/components/auth_form"


const SigninPage = () => {

    const type = "signin"

    return (
        <AuthHeader type={type} >
            <AuthForm type={type} />
        </AuthHeader>
    )
}
export default SigninPage