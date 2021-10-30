import React from 'react'


const CustomInput = ({
    label,
    value,
    inputBlockClassName,
    inputClassName,
    labelClassName,
    onChange
}) => {
    return (
        <div className={inputBlockClassName}>
            <h4 className={labelClassName}>{label}</h4>
            <input
                className={inputClassName}
                onChange={(event) => onChange(event.currentTarget.value)}
                value={value}>
            </input>
        </div>
    )
}

export default CustomInput