import React from 'react'

const Button = ({isLoading, disabled, children, ...props}) => {
    return (
        <button disabled={disabled || isLoading ? true : false} {...props}>{isLoading ? 'Loading...': children}</button>
    )
}

export default Button
