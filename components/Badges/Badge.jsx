import React from "react";
import classNames from "classnames";

export default function Badges({children, className, size, varient, color,  ...rest}) {
    const sizeClass = size && `badge-${size}`
    const varientClass = varient && `badge-${varient}`
    const colorClass = color && `badge-${color}`
    const allClasses = classNames(className, sizeClass, varientClass, colorClass)
    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}