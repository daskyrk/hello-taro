declare namespace SITE {
  interface FullData {
    pages: {
      gallery: {
        list: GalleryItem[]
      },
      category: {
        list: CategoryItem[]
      }
    }
  }

  interface GalleryItem {
    img: string,
    title: string,
    desc: string,
  }

  interface CategoryItem {
    img: string,
  }

  interface GalleryItemDetail {
    title: string,
    desc: string,
  }
}
