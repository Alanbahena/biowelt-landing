import * as React from 'react'
import Link from 'next/link'

interface ButtonValues {
  disabled?: boolean
  link?: string
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export function Button({
  disabled,
  link,
  className,
  children,
  onClick,
}: ButtonValues): JSX.Element {
  if (link) {
    return (
      <Link className={className} href={link}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick} type="submit">
      {children}
    </button>
  )
}
