// src/utils/galleryImports.js

/**
 * galleries : un objet où chaque clé est une catégorie (ex. "men-new")
 * et la valeur est un tableau d'URLs d'images importées via Vite.
 *
 * Les dossiers doivent être structurés ainsi :
 * src/assets/image/men-new-gallery/
 * src/assets/image/men-shoes-gallery/
 * src/assets/image/men-accessories-gallery/
 * src/assets/image/woman-new-gallery/
 * src/assets/image/woman-shoes-gallery/
 * src/assets/image/woman-accessories-gallery/
 * src/assets/image/kids-new-gallery/
 * src/assets/image/kids-shoes-gallery/
 * src/assets/image/kids-accessories-gallery/
 */

export const galleries = {
  "men-new": Object.values(
    import.meta.glob(
      "../assets/image/men-new-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "men-shoes": Object.values(
    import.meta.glob(
      "../assets/image/men-shoes-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "men-accessories": Object.values(
    import.meta.glob(
      "../assets/image/men-accessories-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "woman-new": Object.values(
    import.meta.glob(
      "../assets/image/woman-new-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "woman-shoes": Object.values(
    import.meta.glob(
      "../assets/image/woman-shoes-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "woman-accessories": Object.values(
    import.meta.glob(
      "../assets/image/woman-accessories-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "kids-new": Object.values(
    import.meta.glob(
      "../assets/image/kids-new-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "kids-shoes": Object.values(
    import.meta.glob(
      "../assets/image/kids-shoes-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
  "kids-accessories": Object.values(
    import.meta.glob(
      "../assets/image/kids-accessories-gallery/*.{jpg,jpeg,png,svg}",
      { eager: true, as: "url" }
    )
  ),
};
