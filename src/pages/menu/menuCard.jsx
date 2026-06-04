export default function MenuCard({
  item,
  categories,
  backToSelection,
  onSelectCategory,
  selectedCategory,
}) {
  return (
    <div className="my-12 flex flex-col items-center gap-5 mx-5 w-[80vw] max-w-350">
      <div className="flex flex-col lg:flex-row w-full max-w-350 bg-piz-card-bg py-5 px-5 sm:px-10 rounded-2xl gap-4">
        <button
          onClick={backToSelection}
          className="sm-secondary-btn grid-btn self-start"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <span className="ml-3">Zurück zur Auswahl</span>
        </button>
        <div className="nav-items flex gap-8 h-15 pr-20 overflow-x-scroll pb-2 lg:pb-0 nav-scroll">
          {categories.map((cat) => (
            <div className="flex" style={{ order: cat.order }}>
              <button
                onClick={() => onSelectCategory(cat.title)}
                className="cursor-pointer text-piz-accent navigation rounded-2xl"
              >
                {cat.title}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-3xl">{selectedCategory.title}</h3>
        <img
          src={selectedCategory.imageUrl}
          className="w-50 h-50 lg:w-100 lg:h-100  object-cover rounded-4xl"
          alt={selectedCategory.title}
          loading="lazy"
        />
      </div>

      <div className="bg-piz-card-bg md:px-10 px-5 py-3 rounded-2xl w-full">
        {item.map((meal) => (
          <div key={meal._id} className="flex flex-col my-5">
            <div className="flex w-full justify-between">
              <p className="text-2xl text-piz-text-bright">{meal.title}</p>
              <span className="flex-1 mb-2 mx-2 border-b border-dotted border-piz-text-mute"></span>{" "}
              <p className="text-piz-accent self-end">{meal.price}</p>
            </div>

            <p className="text-piz-text-mute wrap-break-word">
              {meal.ingredients}
            </p>
            {meal.allergy && (
              <p className="text-piz-accent text-xs mt-2">⚠ {meal.allergy}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
