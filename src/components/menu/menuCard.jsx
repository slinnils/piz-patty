export default function MenuCard({
  item,
  categories,
  backToSelection,
  onSelectCategory,
  selectedCategory,
}) {
  function priceConverter(price) {
    let formatter = new Intl.NumberFormat("de-CH", {
      style: "currency",
      currency: "CHF",
    });

    return formatter.format(price);
  }

  function handleCategoryClick(cat, e) {
    onSelectCategory(cat.title);
    e.target.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
  }

  return (
    <section className="my-12 flex flex-col items-center gap-5 mx-5 lg:w-[65vw] w-[95vw] max-w-350">
      <div className="flex flex-col lg:flex-row lg:justify-center w-full max-w-350 bg-piz-card-bg shadow-lg py-5 px-5 sm:px-10 rounded-2xl gap-4">
        <button
          onClick={backToSelection}
          className="sm-secondary-btn grid-btn lg:self-center self-start"
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

        <nav className="nav-items flex gap-8 h-15 pr-20 overflow-x-scroll pb-2 lg:pb-0 nav-scroll">
          {categories.map((cat) => (
            <div
              key={cat._id}
              className={`flex items-center order-[${cat.order}]`}
              style={{ order: cat.order }}
            >
              <button
                onClick={(e) => handleCategoryClick(cat, e)}
                className={`cursor-pointer navigation rounded-2xl ${cat.title === selectedCategory.title ? "active" : "text-piz-text-bright"}`}
              >
                {cat.title}
              </button>
            </div>
          ))}
        </nav>

      </div>

      <div className="flex flex-col items-center gap-3">
        <h3 className="text-3xl">{selectedCategory.title}</h3>
        <img
          src={selectedCategory.imageUrl}
          className="w-50 h-50 lg:w-100 lg:h-100 shadow-lg object-cover rounded-4xl"
          alt={selectedCategory.title}
          loading="lazy"
        />
      </div>

      <ul className="bg-piz-card-bg shadow-lg md:px-10 px-5 py-3 rounded-2xl w-full list-none">
        {item.map((meal) => (
          <li key={meal._id} className="flex flex-col my-5">
            <div className="flex w-full justify-between">
              <p className="text-[clamp(1.1rem,3vw,1.5rem)] text-piz-text-bright">
                {meal.title}
              </p>
              <span className="flex-1 mb-2 mx-2 border-b border-dotted border-piz-text-mute"></span>{" "}
              <p className="text-[clamp(1.25rem,3vw,1.5rem)] text-piz-accent self-end">
                {priceConverter(meal.price)}
              </p>
            </div>

            <p className="text-[clamp(0.9rem,3vw,1.25rem)] text-piz-text-mute wrap-break-word">
              {meal.ingredients}
            </p>
            {meal.allergy && (
              <p className="text-piz-accent-transparent text-xs mt-2">
                ⚠ {meal.allergy}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
