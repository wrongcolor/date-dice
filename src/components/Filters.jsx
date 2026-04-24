const filterGroups = [
  {
    key: 'clima',
    label: 'Clima',
    options: [
      { value: 'romantico', label: 'Romântico' },
      { value: 'divertido', label: 'Divertido' },
      { value: 'leve', label: 'Leve' },
      { value: 'intenso', label: 'Intenso' },
      { value: 'criativo', label: 'Criativo' },
    ],
  },
  {
    key: 'energia',
    label: 'Energia',
    options: [
      { value: 'baixa', label: 'Baixa' },
      { value: 'media', label: 'Média' },
      { value: 'alta', label: 'Alta' },
    ],
  },
  {
    key: 'tempo',
    label: 'Tempo',
    options: [
      { value: '30min', label: '30 min' },
      { value: '1h', label: '1 hora' },
      { value: '2h+', label: '2h+' },
    ],
  },
  {
    key: 'esforco',
    label: 'Esforço',
    options: [
      { value: 'zero', label: 'Zero' },
      { value: 'baixo', label: 'Baixo' },
      { value: 'medio', label: 'Médio' },
    ],
  },
]

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'px-4 py-2 rounded-full text-sm font-medium border transition-all ' +
        (active
          ? 'bg-blush-500 text-white border-blush-500 shadow-sm'
          : 'bg-white/70 text-blush-700 border-blush-200 hover:border-blush-400 hover:bg-white')
      }
    >
      {children}
    </button>
  )
}

export default function Filters({ filters, onChange, onReset }) {
  const hasAny = Object.values(filters).some(Boolean)

  const toggle = (key, value) => {
    onChange({
      ...filters,
      [key]: filters[key] === value ? null : value,
    })
  }

  return (
    <section className="w-full bg-white/60 backdrop-blur rounded-3xl p-5 sm:p-6 border border-white/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm uppercase tracking-wider font-semibold text-blush-600">
          Filtros
        </h2>
        {hasAny && (
          <button
            onClick={onReset}
            className="text-xs text-blush-500 hover:text-blush-700 font-medium"
          >
            limpar
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {filterGroups.map((group) => (
          <div key={group.key}>
            <p className="text-xs font-semibold text-blush-700/80 mb-2">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.options.map((opt) => (
                <Chip
                  key={opt.value}
                  active={filters[group.key] === opt.value}
                  onClick={() => toggle(group.key, opt.value)}
                >
                  {opt.label}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
