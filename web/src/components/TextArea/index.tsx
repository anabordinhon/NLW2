import React, {TextareaHTMLAttributes} from 'react';
import './style.css'

interface TextareatProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name : string;
    label: string;


}

const Textarea: React.FC<TextareatProps> = ({label, name, ...rest }) => {
    return(
        <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest}/>
    </div>
    );
}

export default Textarea;