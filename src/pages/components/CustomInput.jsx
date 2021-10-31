import React from 'react'


const CustomInput = ({
    label,
    value,
    inputBlockClassName,
    inputClassName,
    labelClassName,
    onChange,
    textarea
}) => {
    return (
        <div className={inputBlockClassName}>
            <h4 className={labelClassName}>{label}</h4>
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