import { useMemo, useState } from 'react'
import { activities } from './data/activities.js'
import Button from './components/Button.jsx'
import Filters from './components/Filters.jsx'
import ActivityCard from './components/ActivityCard.jsx'
import DiceAnimation from './components/DiceAnimation.jsx'

const emptyFilters = { clima: null, energia: null, tempo: null, esforco: null }

function filterActivities(list, filters) {
  return list.filter((a) => {
    if (filters.clima && !a.clima.includes(filters.clima)) return false
    if (filters.energia && a.energia !== filters.energia) return false
    if (filters.tempo && a.tempo !== filters.tempo) return false
    if (filters.esforco && a.esforco !== filters.esforco) return false
    return true
  })
}

function pickRandom(list, avoid) {
  if (list.length === 0) return null
  if (list.length === 1) return list[0]
  let pick
  do {
    pick = list[Math.floor(Math.random() * list.length)]
  } while (avoid && pick.nome === avoid.nome)
  return pick
}

export default function App() {
  const [filters, setFilters] = useState(emptyFilters)
  const [current, setCurrent] = useState(null)
  const [rolling, setRolling] = useState(false)
  const [surpriseMode, setSurpriseMode] = useState(false)

  const available = useMemo(
    () => (surpriseMode ? activities : filterActivities(activities, filters)),
    [filters, surpriseMode],
  )

  const draw = ({ surprise = false } = {}) => {
    if (surprise) setSurpriseMode(true)
    const pool = surprise ? activities : filterActivities(activities, filters)
    if (pool.length === 0) {
      setCurrent(null)
      return
    }
    setRolling(true)
    setTimeout(() => {
      setCurrent(pickRandom(pool, current))
      setRolling(false)
    }, 700)
  }

  const resetFilters = () => {
    setFilters(emptyFilters)
    setSurpriseMode(false)
  }

  const handleFilterChange = (next) => {
    setSurpriseMode(false)
    setFilters(next)
  }

  const noMatches = !rolling && current === null && available.length === 0

  return (
    <div className="min-h-full flex flex-col items-center px-4 py-10 sm:py-14">
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <header className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold text-blush-600 border border-blush-200 mb-4">
            🎲 Date Dice
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blush-900">
            O que vamos fazer hoje?
          </h1>
          <p className="mt-3 text-blush-700/80 text-lg">
            Deixa o dado decidir a próxima date. Sem drama, sem planejamento.
          </p>
        </header>

        <Filters
          filters={filters}
          onChange={handleFilterChange}
          onReset={resetFilters}
        />

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => draw()} disabled={rolling}>
            {current ? '🎲 Sortear novamente' : '🎲 Sortear atividade'}
          </Button>
          <Button
            variant="surprise"
            onClick={() => draw({ surprise: true })}
            disabled={rolling}
          >
            ✨ Modo surpresa
          </Button>
        </div>

        <div className="min-h-[160px]">
          {rolling && <DiceAnimation />}

          {!rolling && current && <ActivityCard activity={current} />}

          {noMatches && (
            <div className="w-full bg-white/70 backdrop-blur rounded-3xl border border-blush-200 p-6 text-center">
              <div className="text-4xl mb-2">🫣</div>
              <p className="text-blush-800 font-semibold">
                Nenhuma atividade com esses filtros.
              </p>
              <p className="text-blush-700/80 text-sm mt-1">
                Tenta afrouxar um filtro ou clica em <b>Modo surpresa</b>.
              </p>
            </div>
          )}

          {!rolling && !current && !noMatches && (
            <div className="w-full text-center text-blush-700/70 py-10">
              <div className="text-5xl mb-2">💞</div>
              <p>Ajuste os filtros (ou não) e role o dado.</p>
            </div>
          )}
        </div>

        <footer className="text-center text-xs text-blush-600/70 mt-4">
          Feito com 💛 para noites em casa a dois.
        </footer>
      </div>
    </div>
  )
}
