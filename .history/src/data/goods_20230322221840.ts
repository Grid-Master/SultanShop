interface IGood {
    id: number
    image: string
    title: string
    measureType: string
    measureValue: string
    barcode: string
    manufacturer: string
    brand: string
    description: string
    price: number
}

export const goods: IGood[] = [
    {
        id: 1,
        image: '../images/goods/goodImage1.png',
        title: 'средство для мытья посуды Crystal',
        measureType: 'volume',
        measureValue: '450 мл',
        barcode: '4604049097548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 48.76 
    },
    {
        id: 2,
        image: '../images/goods/goodImage2.png',
        title: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        measureType: 'weight',
        measureValue: '15X28.8 г',
        barcode: '4604049097521',
        manufacturer: 'Нэфис',
        brand: 'ARIEL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 32.12 
    },
    {
        id: 3,
        image: '../images/goods/goodImage3.png',
        title: 'Порошок стиральный Автомат 100 пятен COMPACT',
        measureType: 'weight',
        measureValue: '1500 г',
        barcode: '4604049097599',
        manufacturer: 'Нэфис',
        brand: 'BIMAX',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 55.22 
    },
    {
        id: 4,
        image: '../images/goods/goodImage4.png',
        title: 'Ср-во для мытья посуды Апельсин+мята',
        measureType: 'volume',
        measureValue: '300 мл',
        barcode: '4604049097777',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
    {
        id: 5,
        image: '../images/goods/goodImage4.png',
        title: 'Ср-во для мытья посуды Апельсин+мята',
        measureType: 'weight',
        measureValue: '90 г',
        barcode: '4604049097777',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
]