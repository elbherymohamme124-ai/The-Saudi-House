const whatsappNumber = '201223358691';
const products = [
  {title:'عباية الانسياب الكحلي', detail:'قصة واسعة بانسيابية ناعمة', price:2100, image:'./public/products/model-01.jpg'},
  {title:'عباية النعناع الراقي', detail:'تفاصيل مطرزة بلمسة هادئة', price:1750, image:'./public/products/model-02.jpg'},
  {title:'عباية الحزام الأسود', detail:'إطلالة عملية بقصة أنيقة', price:1650, image:'./public/products/model-03.jpg'},
  {title:'عباية الأكمام الفاخرة', detail:'تفاصيل ناعمة ولمسة عصرية', price:2250, image:'./public/products/model-04.jpg'},
  {title:'عباية الزهور المطرزة', detail:'تطريز رقيق يبرز جمال التصميم', price:1650, image:'./public/products/model-05.jpg'},
  {title:'عباية اللؤلؤ الأسود', detail:'تزيين فاخر عند الكتفين', price:1800, image:'./public/products/model-06.jpg'},
  {title:'عباية الملمس المخملي', detail:'تباين أنيق بدرجات داكنة', price:2400, image:'./public/products/model-07.jpg'},
  {title:'عباية الزخرفة الملكية', detail:'أزرق ملكي مع تطريز ذهبي', price:2100, image:'./public/products/model-08.jpg'},
  {title:'عباية الذهب الأسود', detail:'تطريز ذهبي بتصميم مميز', price:2200, image:'./public/products/model-09.jpg'},
  {title:'عباية الساتان المحتشمة', detail:'قصة سوداء بانسيابية راقية', price:1900, image:'./public/products/model-10.jpg'}
];
const arabicNumber = new Intl.NumberFormat('ar-EG');
const grid = document.querySelector('#product-grid');
grid.innerHTML = products.map((product, index) => `
  <article class="product-card col">
    <div class="product-image-wrap">
      <img src="${product.image}" alt="${product.title} من البيت السعودي" loading="${index < 3 ? 'eager' : 'lazy'}">
    </div>
    <div class="product-meta">
      <div><h3 class="product-title">${product.title}</h3><p class="product-subtitle">${product.detail}</p></div>
      <div class="product-price">${arabicNumber.format(product.price)}<small>جنيه</small></div>
    </div>
    <a class="product-order" href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`مرحبًا، أرغب بالاستفسار عن ${product.title} من البيت السعودي.`)}" target="_blank" rel="noopener noreferrer" aria-label="استفسري عن ${product.title} عبر واتساب">تواصلي عبر واتساب <span aria-hidden="true">←</span></a>
  </article>`).join('');

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'إغلاق القائمة' : 'فتح القائمة');
});
mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
