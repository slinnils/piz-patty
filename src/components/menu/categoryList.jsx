export default function CategoryList({ categories, onSelectCategory }) {
  return (
    <>
      <p className="mt-6 text-2xl text-[clamp(1rem,4vw,1.4rem)] text-piz-accent">
        Worauf hast du heute lust?
      </p>
      <div className="category-grid">
        {categories.map((category) => (
          <div
            className="shadow-lg"
            style={{ order: category.order }}
            key={category._id}
          >
            <button
              onClick={() => onSelectCategory(category.title)}
              className="cursor-pointer grid items-end"
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                loading="lazy"
                className="row-[1/2] col-[1/2] h-auto aspect-square object-cover object-center"
              />
              <div className="bg-stone-950/50 py-6 row-[1/2] col-[1/2]">
                <p className="capitalize">{category.title}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
