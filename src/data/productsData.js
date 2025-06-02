import maroonRose from '../assets/maroon-roses.jpg';
import pinkRoses from '../assets/pink-roses.jpg';
import mixedRoses from '../assets/mixed-roses-bouquet.jpg';
import photoBouquet from '../assets/photo-bouquet.jpg';
import blackGlittered from '../assets/black-glittered.jpg';
import blackRoses from '../assets/black-roses.jpg';
import moneyBouquet1 from '../assets/blue-money.jpg';
import flowerBox from '../assets/flower-box.jpg';
import maroonForever from '../assets/maroon-forever-roses.jpg';
import moneyBouquet2 from '../assets/money-bouquet.jpg';
import jipso from '../assets/red-roses-jipso.jpg';
import snackBouquet from '../assets/snack-bouquet.jpg';
import pinkForever from '../assets/pink-forever-roses.jpg';
import cutePink from '../assets/cute-pink.jpg';
import katty1 from '../assets/katty1.jpg';
import katty2 from '../assets/katty2.jpg';
import katty3 from '../assets/katty3.jpg';
import mixedMroon from '../assets/mixed-maroon.jpg';
import mothersDay from '../assets/mothers-day.jpg';

import img20 from '../assets/20.jpg';
import img21 from '../assets/21.jpg';
import img22 from '../assets/22.jpg';
import img23 from '../assets/23.jpg';
import img24 from '../assets/24.jpg';
import img25 from '../assets/25.jpg';
import img26 from '../assets/26.jpg';
import img27 from '../assets/27.jpg';
import img28 from '../assets/28.jpg';
import img29 from '../assets/29.jpg';
import img30 from '../assets/30.jpg';
import img31 from '../assets/31.jpg';
import img32 from '../assets/32.jpg';
import img33 from '../assets/33.jpg';
import img34 from '../assets/34.jpg';
import img35 from '../assets/35.jpg';
import img36 from '../assets/36.jpg';
import img37 from '../assets/37.jpg';
import img38 from '../assets/38.jpg';
import img39 from '../assets/39.jpg';
import img40 from '../assets/40.jpg';
import img41 from '../assets/41.jpg';


const productsData = [
{ id: 1, name: 'Red Mixed Bouquet', price: 2500, imgUrl: mixedRoses, description: 'A stunning red mixed bouquet perfect for romantic gestures.' },
{ id: 2, name: 'Pink Roses', price: 950, imgUrl: pinkRoses, description: 'Soft and elegant pink roses to express admiration and joy.' },
{ id: 3, name: 'Maroon Roses', price: 1300, imgUrl: maroonRose, description: 'Deep maroon roses symbolizing beauty and passion.' },
{ id: 4, name: 'Photo Bouquet', price: 3600, imgUrl: photoBouquet, description: 'A personalized bouquet with your cherished photos.' },
{ id: 5, name: 'Mixed Bouquet', price: 2500, imgUrl: jipso, description: 'A colorful mix of seasonal flowers perfect for any occasion.' },
{ id: 6, name: 'Black Roses', price: 950, imgUrl: blackRoses, description: 'Unique and bold black roses for a dramatic gesture.' },
{ id: 7, name: 'Money Bouquet', price: 1300, imgUrl: moneyBouquet1, description: 'A creative bouquet made of real money notes.' },
{ id: 8, name: 'Pink Forever Roses', price: 3600, imgUrl: pinkForever, description: 'Preserved pink roses that last for years.' },
{ id: 9, name: 'Snack Bouquet', price: 5500, imgUrl: snackBouquet, description: 'A fun bouquet made with your favorite snacks.' },
{ id: 10, name: 'Money Bouquet', price: 2500, imgUrl: moneyBouquet2, description: 'Stylish and thoughtful money gift bouquet.' },
{ id: 11, name: 'Black Forever Roses', price: 3600, imgUrl: blackGlittered, description: 'Elegant forever black roses with a hint of sparkle.' },
{ id: 12, name: 'Flower Box', price: 3600, imgUrl: flowerBox, description: 'A classy flower arrangement in a luxury box.' },
{ id: 13, name: 'Maroon Forever Roses', price: 3600, imgUrl: maroonForever, description: 'Timeless maroon roses that preserve memories.' },
{ id: 14, name: 'Floral Gift Bag', price: 3600, imgUrl: katty1, description: 'A stylish gift bag filled with fresh blooms.' },
{ id: 15, name: 'Mixed Roses Bouquet', price: 5500, imgUrl: mixedMroon, description: 'A luxurious mix of premium rose colors.' },
{ id: 16, name: 'Table Roses', price: 2500, imgUrl: katty3, description: 'Perfect rose arrangement for tabletops and decor.' },
{ id: 17, name: 'Maroon Forever Roses', price: 3600, imgUrl: mothersDay, description: 'Maroon preserved roses, ideal for special days.' },
{ id: 18, name: 'Pink Mixed Bouquet', price: 3600, imgUrl: cutePink, description: 'A delightful pink-toned flower combination.' },
{ id: 19, name: 'Floral Gift Bag', price: 3600, imgUrl: katty2, description: 'Charming floral surprise in an elegant bag.' },
{ id: 20, name: 'Red Mixed Bouquet', price: 2500, imgUrl: img20, description: 'Vibrant red blooms mixed for a bold impression.' },
{ id: 21, name: 'Pink Roses', price: 950, imgUrl: img21, description: 'Delicate and romantic pink roses for any day.' },
{ id: 22, name: 'Maroon Roses', price: 1300, imgUrl: img22, description: 'Graceful maroon roses symbolizing deep affection.' },
{ id: 23, name: 'Photo Bouquet', price: 3600, imgUrl: img23, description: 'A keepsake bouquet with customizable photos.' },
{ id: 24, name: 'Mixed Bouquet', price: 2500, imgUrl: img24, description: 'Colorful mix of flowers suited for all occasions.' },
{ id: 25, name: 'Black Roses', price: 950, imgUrl: img25, description: 'Striking black roses for unforgettable moments.' },
{ id: 26, name: 'Money Bouquet', price: 1300, imgUrl: img26, description: 'Elegant and practical, made with real money.' },
{ id: 27, name: 'Pink Forever Roses', price: 3600, imgUrl: img27, description: 'Romantic pink preserved roses in full bloom.' },
{ id: 28, name: 'Snack Bouquet', price: 5500, imgUrl: img28, description: 'Tasty snacks arranged into a creative bouquet.' },
{ id: 29, name: 'Money Bouquet', price: 2500, imgUrl: img29, description: 'A modern take on gifting cash stylishly.' },
{ id: 30, name: 'Black Forever Roses', price: 3600, imgUrl: img30, description: 'Luxurious black roses that last forever.' },
{ id: 31, name: 'Flower Box', price: 3600, imgUrl: img31, description: 'Fresh floral box perfect for elegant gifting.' },
{ id: 32, name: 'Maroon Forever Roses', price: 3600, imgUrl: img32, description: 'Beautiful preserved roses in a rich hue.' },
{ id: 33, name: 'Floral Gift Bag', price: 3600, imgUrl: img33, description: 'Handbag-style gift full of fresh blooms.' },
{ id: 34, name: 'Mixed Roses Bouquet', price: 5500, imgUrl: img34, description: 'Premium bouquet featuring multi-colored roses.' },
{ id: 35, name: 'Table Roses', price: 2500, imgUrl: img35, description: 'Chic roses arrangement ideal for display tables.' },
{ id: 36, name: 'Maroon Forever Roses', price: 3600, imgUrl: img36, description: 'Elegant and lasting maroon rose keepsake.' },
{ id: 37, name: 'Pink Mixed Bouquet', price: 3600, imgUrl: img37, description: 'Soft pink flower mix perfect for birthdays.' },
{ id: 38, name: 'Floral Gift Bag', price: 3600, imgUrl: img38, description: 'A modern bag of fresh, fragrant flowers.' },
{ id: 39, name: 'Special Gift Box', price: 3000, imgUrl: img39, description: 'A luxurious gift box with handpicked blooms.' },
{ id: 40, name: 'Luxury Box', price: 4500, imgUrl: img40, description: 'An exclusive flower box for grand occasions.' },
{ id: 41, name: 'Rose Heart Box', price: 3800, imgUrl: img41, description: 'Heart-shaped rose box to show your love.' },
];

export default productsData;


