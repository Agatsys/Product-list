import React from 'react'


const CustomInput = ({
    label,
    value,
    inputBlockClassName,
    inputClassName,
    onChange,
    textarea
}) => {
    return (
        <div className={inputBlockClassName}>
            <label>{label}</label>
            {!textarea &&
                <input
                    className={inputClassName}
                    onChange={(event) => onChange(event.currentTarget.value)}
                    value={value}>
                </input> }
            {textarea &&
                <textarea
                    className={inputClassName}
                    onChange={(event) => onChange(event.currentTarget.value)}
                    value={value}>
                </textarea> }
        </div>
    )
}

export default CustomInput