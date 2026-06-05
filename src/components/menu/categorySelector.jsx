import "../../styles/global.css";
import CategoryList from "./categoryList.jsx";
import MenuCard from "./menuCard.jsx";
import { useState } from "react";

export default function MenuPage({ items, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function categorySelector(category) {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToSelection() {
    setSelectedCategory(null);
  }

  return (
    <>
      <div className="page-title">
        <h3>{selectedCategory === null ? "Menü" : "Speisekarte"}</h3>
      </div>

      {selectedCategory === null ? (
        <CategoryList
          onSelectCategory={categorySelector}
          items={items}
          categories={categories}
        />
      ) : (
        <div>
          {selectedCategory !== null && (
            <MenuCard
              backToSelection={backToSelection}
              item={items.filter(
                (item) => item.category.title === selectedCategory,
              )}
              categories={categories}
              onSelectCategory={categorySelector}
              selectedCategory={categories.find(
                (cat) => cat.title === selectedCategory,
              )}
            />
          )}
        </div>
      )}
    </>
  );
}
