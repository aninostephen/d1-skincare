interface InputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ 
    type = "text", 
    placeholder = "", 
    className = "", 
    value, 
    onChange 
}: InputProps) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;