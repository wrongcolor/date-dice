export default function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blush-300'

  const sizes = 'px-6 py-4 text-lg'

  const variants = {
    primary:
      'bg-gradient-to-br from-blush-500 to-blush-600 text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5',
    secondary:
      'bg-white/80 backdrop-blur text-blush-700 border border-blush-200 hover:bg-white hover:border-blush-300',
    ghost:
      'bg-transparent text-blush-700 hover:bg-blush-100/60',
    surprise:
      'bg-gradient-to-br from-amber-400 via-blush-400 to-blush-600 text-white shadow-soft hover:shadow-lg hover:-translate-y-0.5',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
