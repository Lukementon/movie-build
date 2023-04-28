export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the product',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Product description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      description: 'Price of the product',
      type: 'number',
    },
    {
      name: 'isOnSale',
      title: 'Is On Sale',
      type: 'boolean',
    },
    {
      name: 'salePrice',
      title: 'Sale Price',
      type: 'number',
      hidden: ({parent, value}: any) => !value && !parent?.isOnSale,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'countInStock',
      title: 'Count In Stock',
      type: 'number',
    },
  ],
}
