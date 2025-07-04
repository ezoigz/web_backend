import AuthForm from "@/features/auths/components/auth_form";
import AuthHeader from "@/features/auths/components/auth_header"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "สมัครสมาชิก",
    description: "เว็บไซต์สำหรับการจัดจำหน่ายภาพถ่าย",
};
const SignupPage = () => {

    const type = "signup"

    return (
        <AuthHeader type={type}>
            <AuthForm type={type} />
        </AuthHeader>
    );

};
export default SignupPage;