import * as React from "react"

export default function AngularIcon({className}: {className?: string}) {
  return (
      <svg
          width={64}
          height={64}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
      >
        <g clipPath="url(#clip0_91_193)" fill="currentColor">
          <path d="M39.155-.027L60.05 44.94l2.172-34.297L39.155-.027zM44.545 47.223H19.402l-3.21 7.779L31.974 64l15.781-8.998-3.21-7.779zM23.71 37.135h16.535l-8.272-20.1-8.263 20.1zM24.792-.027L1.725 10.642l2.172 34.297L24.792-.027z" />
        </g>
        <defs>
          <clipPath id="clip0_91_193">
            <path fill="currentColor" d="M0 0H64V64H0z" />
          </clipPath>
        </defs>
      </svg>
  )
}
