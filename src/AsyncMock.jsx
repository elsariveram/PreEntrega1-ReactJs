const products = [
    { 
        id: 1, 
        category: "bicicletas", 
        description: "Bicicleta de última generación con cuadro de carbono, suspensión delantera y transmisión de 18 velocidades. Ideal para terrenos variados y uso tanto en carretera como en montaña.", 
        stock: 5, 
        name: "Bicicleta Trek", 
        price: 1000000, 
        image: "https://sparta.cl/media/catalog/product/t/o/topfuel98xt_23_36790_a_primary.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550"  
    },
    { 
        id: 2,
        category: "indumentaria", 
        description: "Casco de alta tecnología con sistema MIPS para mayor protección contra impactos angulares. Diseñado para ofrecer comodidad y ventilación, ideal para ciclistas de todos los niveles.", 
        stock: 7, 
        name: "Casco Specialized", 
        price: 35000, 
        image: "https://assets.specialized.com/i/specialized/60821-102_HLMT_ALIGN-II-HLMT-MIPS-CE-WHT-S-M_HERO?$scom-plp-product-image-square$&fmt=auto"  
    },
    { 
        id: 3, 
        category: "accesorios", 
        description: "Bombín de alta gama para inflar rápidamente las ruedas de tu bicicleta. Compatible con válvulas Presta y Schrader, incluye manómetro integrado para una lectura precisa de la presión.", 
        stock: 9, 
        name: "Bombin Beto", 
        price: 10000, 
        image: "https://bikefactory.cl/9571-large_default/bombin-beto-cmp-004.jpg"  
    },
    { 
        id: 4,
        category: "accesorios", 
        description: "Juego de luces delanteras y traseras con alta visibilidad. Resistente al agua y con diferentes modos de iluminación para asegurar tu seguridad en cualquier condición de luz.",  
        stock: 12,  
        name: "Luz delantera IGSport", 
        price: 15000, 
        image: "https://igpsport.cl/cdn/shop/files/E4_BE_A7_E9_9D_A2_E7_AB_8B_E4_BD_93.210_clipped_rev_1_720x.jpg?v=1725923797"  
    },
    { 
        id: 5, 
        category: "bicicletas", 
        description: "Bicicleta de montaña con cuadro de aluminio ligero y resistente. Suspensión completa y transmisión de 21 velocidades para un rendimiento óptimo en terrenos irregulares.", 
        stock: 8, 
        name: "Bicicleta Scott", 
        price: 1200000, 
        image: "https://asset.scott-sports.com/fit-in/2000x2000/290/290173_1915303_3.png?signature=c83ce1abada859e2e88cdceecdbd6dd2b318f6c60bbfbfba5603ab08d2557b5b" // Vacío para agregar más tarde
    },
    { 
        id: 6, 
        category: "indumentaria", 
        description: "Guantes de ciclismo con acolchado en la palma y material transpirable. Ofrecen comodidad y protección durante largos recorridos en bicicleta.", 
        stock: 15, 
        name: "Guantes Giro", 
        price: 25000, 
        image: "https://i0.wp.com/adrenalinasport.cl/wp-content/uploads/2022/08/giro-dnd-dirt-gloves-coal-iceberg-hero.jpg?fit=800%2C800&ssl=1" // Vacío para agregar más tarde
    },
    { 
        id: 7, 
        category: "accesorios", 
        description: "Soporte para bicicleta de pared para ahorrar espacio y mantener tu bicicleta segura y en buen estado cuando no está en uso.", 
        stock: 10, 
        name: "Soporte de pared Bike", 
        price: 20000, 
        image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/113334903_01/w=800,h=800,fit=pad" 
    },
    { 
        id: 8, 
        category: "bicicletas", 
        description: "Bicicleta eléctrica con motor de 250W y batería de larga duración. Ideal para desplazamientos urbanos y recorridos largos con poco esfuerzo.", 
        stock: 4, 
        name: "Bicicleta Eléctrica E-Bike", 
        price: 2000000, 
        image: "https://laciclovia.cl/wp-content/uploads/2022/01/BECMM9GRNG.jpeg" 
    }
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });


}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id));
        }, 500);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category));
        }, 500);
    });
}