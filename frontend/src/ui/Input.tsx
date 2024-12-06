import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: JSX.Element | string
}

const Input: React.FC<Props> = ({ label, ...props }) => {
    return (
        <label className="form-control w-full">
            {
                label && <div className="label-alt">
                    <span className="label-text">{label}</span>
                </div>
            }
            <input
                {...props}
                className="input input-bordered input-sm w-full focus:outline-none" />
        </label>
    )
}

export default Input