export default function CategoryList({ categories, onSelectCategory }) {
  return (
    <>
      <h2 className="mt-6 text-2xl">Worauf hast du heute lust?</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div
            className="h-auto w-auto"
            style={{ order: category.order }}
            key={category._id}
          >
            <button onClick={() => onSelectCategory(category.title)} className="cursor-pointer grid items-end">
              <img
                src={category.imageUrl}
                alt={category.title}
                loading="lazy"
                className="row-[1/2] col-[1/2] h-80 w-80 object-cover"
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
