import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    id: string
    requird?: boolean
}

const InputForm = ({ label, id, required = false, ...props }: InputFormProps) => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <Input
                id={id}
                name={id}
                {...props}
            />
        </div>
    )
}

export default InputForm