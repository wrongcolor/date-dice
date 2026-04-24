const climaLabel = {
  romantico: 'Romântico',
  divertido: 'Divertido',
  leve: 'Leve',
  intenso: 'Intenso',
}

const energiaLabel = { baixa: 'Baixa', media: 'Média', alta: 'Alta' }
const tempoLabel = { '30min': '30 min', '1h': '1 hora', '2h+': '2h ou mais' }
const esforcoLabel = { zero: 'Zero', baixo: 'Baixo', medio: 'Médio' }

function Tag({ children }) {
  return (
    <span className="inline-flex items-center text-xs font-medium text-blush-700 bg-blush-100 rounded-full px-3 py-1">
      {children}
    </span>
  )
}

export default function ActivityCard({ activity }) {
  return (
    <article
      key={activity.nome}
      className="w-full bg-white rounded-3xl shadow-soft border border-blush-100 p-6 sm:p-8 animate-pop"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="text-4xl">💛</div>
        <div>
          <p className="text-xs uppercase tracking-wider text-blush-500 font-semibold">
            Atividade sorteada
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-blush-900 mt-1">
            {activity.nome}
          </h3>
        </div>
      </div>

      <p className="text-blush-800/90 leading-relaxed text-base sm:text-lg">
        {activity.descricao}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {activity.clima.map((c) => (
          <Tag key={c}>{climaLabel[c]}</Tag>
        ))}
        <Tag>Energia: {energiaLabel[activity.energia]}</Tag>
        <Tag>⏱ {tempoLabel[activity.tempo]}</Tag>
        <Tag>Esforço: {esforcoLabel[activity.esforco]}</Tag>
      </div>
    </article>
  )
}
