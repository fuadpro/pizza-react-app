const sizes = { xs: 'Mini pizza, 15', sm: 'Kiçik, 23', md: 'Orta, 30', lg: 'Böyük, 35', lx: 'NY Style, 40' }
const pizza = [
  {
    id: 1,
    img: "chicken_barbekyu.jpg",
    name: "Çiken Barbekyu",
    desc: "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 10, md: 16, lg: 22 },
    cath: ['Toyuq']
  },
  {
    id: 2,
    img: "Cheddar-Ciken-Club.png",
    name: "Cheddar Çiken Club",
    desc: "Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
    price: { sm: 11, md: 18, lg: 22 },
    cath: ['Toyuq']
  },
  {
    id: 3,
    img: "meksika.jpg",
    name: "Meksika",
    desc: "Qril Toyuq, Pomidor, Göbələk, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 9, md: 15, lg: 20 },
    cath: ['Toyuq', 'Acılı']
  },
  {
    id: 4,
    img: "qarishiq_et.jpg",
    name: "Qarışıq Ət",
    desc: "Pepperoni, İtalyan Sosisi, Mal Əti, Mal Ətindən Vetçina, Mozzarella Pendiri",
    price: { sm: 13, md: 21, lg: 25 },
    cath: ['Ət']
  },
  {
    id: 5,
    img: "hot_and_spaysi.jpg",
    name: "Hot and Spaysi",
    desc: "Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 10, md: 16, lg: 21 },
    cath: ['Ət', 'Acılı']
  },
  {
    id: 6,
    img: "Grill-Ciken-Parmezan.png",
    name: "Qril Çiken Parmezan",
    desc: "Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella Pendiri, Halapeno Bibəri",
    price: { xs: 5.5, sm: 11, md: 17, lg: 20 },
    cath: ['Toyuq', 'Acılı']
  },
  {
    id: 7,
    img: "New-York-Style-Margarita.jpg",
    name: "New York Style Marqarita",
    desc: "Pizza Sous, Mozzarella, Pomidor, Oreqano",
    price: { lx: 26 },
    cath: ['Vegan']
  },
  {
    id: 8,
    img: "New-York-Style-Pepperoni.jpg",
    name: "New York Style Pepperoni",
    desc: "Pizza Sous, Pepperoni, Mozzarella ",
    price: { lx: 23 },
    cath: ['Ət']
  },
  {
    id: 9,
    img: "vegetarian-acili.png",
    name: "Acılı Vegetarian",
    desc: "Halapenyo Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər və Mozzarella Pendiri",
    price: { xs: 5.5, sm: 9, md: 13, lg: 18 },
    cath: ['Vegan', 'Acılı']
  },
  {
    id: 10,
    img: "papamiks-sayt.png",
    name: "Papa Miks",
    desc: "Çiken BBQ, Hot&Spaysi, Marqarita, Klassik Pepperoni",
    price: { lx: 20 },
    cath: ['Toyuq', 'Acılı']
  },
  {
    id: 11,
    img: "4-pendir.png",
    name: "4 Pendir",
    desc: "Pizza sousu, Mozzarella Pendiri, Feta Penidiri, Parmezan Pendiri, Cheddar Pendiri",
    price: { sm: 11, md: 16, lg: 22 },
    cath: ['Vegan']
  },
  {
    id: 12,
    img: "vegetarian.jpg",
    name: "Vegetarian",
    desc: "Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 9, md: 13, lg: 18 },
    cath: ['Vegan']
  },
  {
    id: 13,
    img: "klassik_pepperoni.jpg",
    name: "Klassik Pepperoni",
    desc: "Pepperoni, Ekstra Mozzarella",
    price: { xs: 5.5, sm: 9, md: 14, lg: 19 },
    cath: ['Ət']
  },
  {
    id: 14,
    img: "new_orleans_pizza.jpg",
    name: "Nyu Orleans",
    desc: "Qarğıdalı, Qril Toyuq, Göbələk, Yaşıl Bibər, Sarımsaq Sousu, Mozzarella Pendiri",
    price: { sm: 10, md: 15, lg: 21 },
    cath: ['Toyuq']
  },
  {
    id: 15,
    img: "Mushroom%20320x220%20px.jpg",
    name: "Çiken Göbələk",
    desc: "Qril toyuq, Turşu xiyar, Göbələk, Mozzarella, Göbələk sousu",
    price: { sm: 12, md: 19, lg: 23 },
    cath: ['Toyuq']
  },
  {
    id: 16,
    img: "Marinera.jpg",
    name: "Marinera",
    desc: "QrilTon Balığı, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 10, md: 18, lg: 22 },
    cath: ['Vegan']
  }
];

export {
    sizes,
    pizza
}