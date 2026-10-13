interface TagProps {
  children: string
  bordered?: boolean
}

export function Tag({ children, bordered = true }: TagProps) {
  return (
    <span
      className={`text-[10px] font-mono px-2 py-0.5 text-gray-300 rounded ${
        bordered ? 'bg-black/60 border border-gray-800' : 'bg-black'
      }`}
    >
      {children}
    </span>
  )
}
