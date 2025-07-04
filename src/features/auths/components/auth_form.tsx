"use client"

import InputForm from "@/components/shared/input_form"
import SubmitBtn from "@/components/shared/submit_btn"
import { CardContent, CardFooter } from "@/components/ui/card"
import AuthFooter from "./auth_footer"
import { useForm } from "@/hooks/use_form"
import { authAction } from "../actions/auths"
import Error_message from "@/components/shared/error_message"


interface AuthFormProps {
    type: "signup" | "signin"
}

const AuthForm = ({ type }: AuthFormProps) => {
    const { errors, formAction, isPending, clearErrors } = useForm(
        authAction, "/"
    )

    const renderInput = (
        label: string,
        id: string,
        inputType: string = "text",
        required = false
    ) => (
        <div className="flex flex-col gap-2">
            <InputForm
                label={label}
                id={id}
                type={inputType}
                required={required}
            />
            {errors[id] && (
                <Error_message error={errors[id][0]} />
            )}
        </div>
    )

    return (
        <form
            action={formAction}
            onChange={clearErrors}
        >
            <CardContent className="flex flex-col gap-3">
                {type === "signup" && renderInput("ชื่อผู้ใช้", "name")}
                {renderInput("อีเมล", "email", "email", true)}
                {renderInput("รหัสผ่าน", "password", "password", true)}
                {type === "signup" && renderInput("ยืนยันรหัสผ่าน", "confirmPassword", "password", true)}
            </CardContent>
            <CardFooter className="pt-4 flex flex-col gap-2">
                <AuthFooter type={type} />
                <SubmitBtn
                    name={type === "signup" ? "สมัครสมาชิก" : "เข้าสู่ระบบ"}
                    className="w-full"
                    pending={isPending}
                />
            </CardFooter>
        </form>
    )
}

export default AuthForm