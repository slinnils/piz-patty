export default function MenuCard({ item, backToSelection }) {
  return (
    <div className="mt-5">
      <button className="sm-secondary-btn" onClick={backToSelection}>⭠ Zurück zur Auswahl</button>
      {item.map((meal) => (
        <div key={meal._id} className="flex flex-col my-5 w-200">
          <div className="flex w-full justify-between">
            <p className="text-2xl text-piz-text-bright">{meal.title}</p>
            <span className="flex-1 mb-2 mx-2 border-b border-dotted border-gray-500"></span>{" "}
            <p className="text-piz-accent self-end">{meal.price}</p>
          </div>

          <p className="text-piz-text-mute">{meal.ingredients}</p>
          {meal.allergry && <p className="text-piz-accent text-xs mt-2">⚠ {meal.allergy}</p>}
        </div>
      ))}
    </div>
  );
}
