import React from 'react'
import classNames from 'classnames';
import StyleSheet from './Button.module.css'

type ButtonProps = {
    variant: 'default' | 'icon' ;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, variant = 'default', ...rest}: ButtonProps ) => {
    const classMap = {
        default: StyleSheet.default,
        icon: StyleSheet.icon,
    };
  return (
    <button  className={classNames(StyleSheet.botao, classMap[variant])} {...rest}>{children}</button>
  )
}

export default Button;
