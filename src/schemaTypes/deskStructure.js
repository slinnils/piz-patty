export const structure = (S) =>
  S.list()
    .title('Inhalt')
    .items([
      S.listItem()
        .title('Öffnungszeiten')
        .child(
          S.documentList()
            .title('Öffnungszeiten')
            .filter('_type == "openingHours"')
        ),
      S.divider(),
      S.listItem()
        .title('Kategorien verwalten')
        .child(
          S.documentTypeList('category')
            .title('Kategorien')
        ),
      S.listItem()
        .title('Menü')
        .child(
          S.documentTypeList('category')
            .title('Kategorien')
            .child((categoryId) =>
              S.documentList()
                .title('Menü-Einträge')
                .filter('_type == "menu" && category._ref == $categoryId')
                .params({ categoryId })
                .initialValueTemplates([
                  S.initialValueTemplateItem('menu-by-category', { categoryId })
                ])
            )
        ),
      S.divider(),
      S.listItem()
        .title('Alle Menü-Einträge')
        .child(
          S.documentList()
            .title('Alle Menü-Einträge')
            .filter('_type == "menu"')
        ),
    ])