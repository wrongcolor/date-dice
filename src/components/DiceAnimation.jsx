export default function DiceAnimation() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="text-7xl animate-roll" aria-hidden="true">
        🎲
      </div>
      <p className="mt-4 text-blush-700 font-medium animate-pulse">
        Sorteando algo especial...
      </p>
    </div>
  )
}
