interface Data {
    Heading: string;
    Hero: {
        image_URL: string;
        product_Name: string;
    }[];
    Popular_Suggestions: string[];
}
const data: Data = {
    Heading: "Latest Trends",
    Hero: [
        {
            image_URL: "https://th.bing.com/th/id/OIP.78WiON-_s09WcqPQkWWHPQHaLH?rs=1&pid=ImgDetMain",
            product_Name: "Italian Style",
        },
        {
            image_URL: "https://i.pinimg.com/originals/53/7c/f9/537cf933fa665485501adbc9219627ef.jpg",
            product_Name: "Modern Street wear",
        },
        {
            image_URL: "https://img.allw.mn/content/z4/rt/wzwhs14o55cf54c611e2e749088096_600x1067.jpg",
            product_Name: "Stylish Capris trend",
        },
        {
            image_URL: "https://i0.wp.com/styleblog.ca/wp-content/uploads/2012/11/yellow-pants-blue-coat-3-e1352674098847.jpg?fit=530%2C770&ssl=1",
            product_Name: "Canadian Fashion",
        },
        {
            image_URL: "https://th.bing.com/th/id/OIP.kkFeJj2f4QInlcyG3uZgXAHaLI?rs=1&pid=ImgDetMain",
            product_Name: "Party outfits",
        },
        ],
    Popular_Suggestions: ["Striped shirt dress", "Satin shirts", "Denim jumpsuits", "Leather Dresses", "Soild tshirts"],
}

export default data;