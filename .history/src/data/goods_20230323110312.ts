import goodImage1 from '../images/goods/goodImage1.png'
import goodImage2 from '../images/goods/goodImage2.png'
import goodImage3 from '../images/goods/goodImage3.png'
import goodImage4 from '../images/goods/goodImage4.png'
import goodImage5 from '../images/goods/goodImage5.png'
import goodImage6 from '../images/goods/goodImage6.png'

export interface IGood {
    id: number
    image: string
    title: string
    careType: string[]
    measureType: string
    measureValue: string
    barcode: string
    manufacturer: string
    brand: string
    description: string
    price: number
}

export const catalogGoods: IGood[] = [
    {
        id: 1,
        image: goodImage1,
        title: 'средство для мытья посуды Crystal',
        careType: ['hands'],
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
        image: goodImage2,
        title: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        careType: ['hands'],
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
        image: goodImage3,
        title: 'Порошок стиральный Автомат 100 пятен COMPACT',
        careType: ['hands'],
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
        image: goodImage4,
        title: 'Ср-во для мытья посуды Апельсин+мята',
        careType: ['hands'],
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
        image: goodImage5,
        title: 'Экологичное туалетное мыло. Литсея и бергамот',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '90 г',
        barcode: '4604049097321',
        manufacturer: 'Нэфис',
        brand: 'BioMio BIO-SOAP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
    {
        id: 6,
        image: goodImage6,
        title: 'Порошок стиральный Vanish MaxiPack',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '300 г',
        barcode: '4604049097999',
        manufacturer: 'Нэфис',
        brand: 'Vanish',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
    {
        id: 7,
        image: goodImage1,
        title: 'средство для мытья посуды Crystal',
        careType: ['hands'],
        measureType: 'volume',
        measureValue: '450 мл',
        barcode: '4604049097548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 48.76 
    },
    {
        id: 8,
        image: goodImage2,
        title: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '15X28.8 г',
        barcode: '4604049097521',
        manufacturer: 'Нэфис',
        brand: 'ARIEL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 32.12 
    },
    {
        id: 9,
        image: goodImage3,
        title: 'Порошок стиральный Автомат 100 пятен COMPACT',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '1500 г',
        barcode: '4604049097599',
        manufacturer: 'Нэфис',
        brand: 'BIMAX',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 55.22 
    },
    {
        id: 10,
        image: goodImage4,
        title: 'Ср-во для мытья посуды Апельсин+мята',
        careType: ['hands'],
        measureType: 'volume',
        measureValue: '300 мл',
        barcode: '4604049097777',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
    {
        id: 11,
        image: goodImage5,
        title: 'Экологичное туалетное мыло. Литсея и бергамот',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '90 г',
        barcode: '4604049097321',
        manufacturer: 'Нэфис',
        brand: 'BioMio BIO-SOAP',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
    {
        id: 12,
        image: goodImage6,
        title: 'Порошок стиральный Vanish MaxiPack',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '300 г',
        barcode: '4604049097999',
        manufacturer: 'Нэфис',
        brand: 'Vanish',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 25.75 
    },
    {
        id: 13,
        image: goodImage1,
        title: 'средство для мытья посуды Crystal',
        careType: ['hands'],
        measureType: 'volume',
        measureValue: '450 мл',
        barcode: '4604049097548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 48.76 
    },
    {
        id: 14,
        image: goodImage2,
        title: 'Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '15X28.8 г',
        barcode: '4604049097521',
        manufacturer: 'Нэфис',
        brand: 'ARIEL',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 32.12 
    },
    {
        id: 15,
        image: goodImage3,
        title: 'Порошок стиральный Автомат 100 пятен COMPACT',
        careType: ['hands'],
        measureType: 'weight',
        measureValue: '1500 г',
        barcode: '4604049097599',
        manufacturer: 'Нэфис',
        brand: 'BIMAX',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
        price: 55.22 
    },
        {
            id: 16,
            image: goodImage4,
            title: 'Ср-во для мытья посуды Апельсин+мята',
            careType: ['hands'],
            measureType: 'volume',
            measureValue: '300 мл',
            barcode: '4604049097777',
            manufacturer: 'Нэфис',
            brand: 'AOS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
            price: 25.75 
        },
        {
            id: 17,
            image: goodImage5,
            title: 'Экологичное туалетное мыло. Литсея и бергамот',
            careType: ['hands', 'body'],
            measureType: 'weight',
            measureValue: '90 г',
            barcode: '4604049097321',
            manufacturer: 'Нэфис',
            brand: 'BioMio BIO-SOAP',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
            price: 25.75 
        },
        {
            id: 18,
            image: goodImage6,
            title: 'Порошок стиральный Vanish MaxiPack',
            careType: ['hands'],
            measureType: 'weight',
            measureValue: '300 г',
            barcode: '4604049097999',
            manufacturer: 'Нэфис',
            brand: 'Vanish',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.',
            price: 25.75 
        },
]