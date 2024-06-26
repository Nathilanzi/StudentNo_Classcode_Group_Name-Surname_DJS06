// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// 1. forEach Basics
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log('${name} (${provinces[index]})') );
// 2. Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);
// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);
// 4. Sorting
const sortedProvinces = provinces.slice().sort(); // Slice to avoid mutating the original
console.log(sortedProvinces);
// 5. Filtering Cape
const noCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log('Count of remaining provinces: ${noCapeProvinces.length});')
// 6. Finding 'S'
const namesWithS = names.map(name => name.toLowerCase().includes('s'));
console.log(namesWithS);
// 7. Creating Object Mapping
const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  return map;
}, {});
console.log(nameProvinceMap);
// Advanced Exercises

console.log(
  // 1. Log Products
  products.map(p => p.product),
// 2. Filter by Name Length
products.filter(p => p.product.length <= 5),
// 3. Price Manipulation
"Total price: " + products
.filter(p => p.price && !isNaN(p.price)) // Filter out invalid prices
.reduce((sum, p) => sum + Number(p.price), 0), // Convert to numbers and sum
 // 4. Link Product Names
 products.reduce((str, p) => str + p.product, ""),
// 5. Find Extremes in Prices
"Highest: " + 
Math.max(...products.map(p => Number(p.price) || -Infinity)) + 
". Lowest: " + 
Math.min(...products.map(p => Number(p.price) || Infinity)), // Use Infinity for empty prices
 // 6. Object Transformation
 Object.fromEntries(
  Object.entries(products).map(([key, { product, price }]) => [key, { name: product, cost: price }])
)
);