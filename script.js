// ---------- ícones: uma versão "frente" e uma versão "costas/ângulo" por peça ----------
const icons = {
  tshirt_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M8 4L4 7l2 3 2-1v11h8V9l2 1 2-3-4-3-2 2h-4z"/><path d="M10 4c0 1.3.9 2.2 2 2.2s2-.9 2-2.2"/></svg>`,
  tshirt_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M8 4L4 7l2 3 2-1v11h8V9l2 1 2-3-4-3-2 2h-4z"/><line x1="12" y1="6" x2="12" y2="20"/><line x1="9" y1="10" x2="9" y2="18"/><line x1="15" y1="10" x2="15" y2="18"/></svg>`,

  hoodie_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M7 5c1-1.5 3-2 5-2s4 .5 5 2l3 3-2.5 2-1.5-1v9H7v-9l-1.5 1L3 8z"/><path d="M10 5c0 1.5.9 2.5 2 2.5s2-1 2-2.5"/></svg>`,
  hoodie_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M7 5c1-1.5 3-2 5-2s4 .5 5 2l3 3-2.5 2-1.5-1v9H7v-9l-1.5 1L3 8z"/><path d="M12 7v11" /><path d="M9 9c1 .8 4 .8 5 0"/></svg>`,

  cap_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M20 14c2 0 3 .8 3 1.6S22 17 20 17H4c-1 0-1-2 0-2"/></svg>`,
  cap_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M20 14c2 0 3 .8 3 1.6S22 17 20 17H4c-1 0-1-2 0-2"/><path d="M9 7c1.5 1 4.5 1 6 0"/></svg>`,

  shorts_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 4h14l1 8-4 1-1-5-1 5H10l-1-5-1 5-4-1z"/></svg>`,
  shorts_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 4h14l1 8-4 1-1-5-1 5H10l-1-5-1 5-4-1z"/><line x1="12" y1="4" x2="12" y2="12"/></svg>`,

  pants_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3h12l1 8-2 10h-3l-2-11-2 11H7L5 11z"/></svg>`,
  pants_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3h12l1 8-2 10h-3l-2-11-2 11H7L5 11z"/><line x1="12" y1="3" x2="12" y2="21"/></svg>`,

  jacket_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M8 4L4 7l2 4 2-1.5V20h8V9.5L18 11l2-4-4-3-2 2h-4z"/><line x1="12" y1="6" x2="12" y2="20"/></svg>`,
  jacket_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M8 4L4 7l2 4 2-1.5V20h8V9.5L18 11l2-4-4-3-2 2h-4z"/><path d="M9 8c1 1 5 1 6 0"/></svg>`,

  glasses_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6.5" cy="13" r="3.5"/><circle cx="17.5" cy="13" r="3.5"/><line x1="10" y1="12" x2="14" y2="12"/><path d="M3 12l-1-3M21 12l1-3"/></svg>`,
  glasses_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8l2 5M20 8l-2 5"/><line x1="6" y1="13" x2="18" y2="13"/></svg>`,

  chain_front: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="7" r="3"/><circle cx="16" cy="12" r="3"/><circle cx="8" cy="17" r="3"/></svg>`,
  chain_back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="7" r="3"/><circle cx="12" cy="17" r="3"/><line x1="12" y1="10" x2="12" y2="14"/></svg>`
};

// tênis: agora usa foto real por cor, em vez do ícone placeholder
function sneakerImg(color, extraClass){
  return `<img src="${color.img}" alt="ASICS Gel Kayano 14 - ${color.name}"${extraClass ? ` class="${extraClass}"` : ''}>`;
}

const products = [
  {cat:'Camiseta', brand:'ESSENTIAL FEAR GOD', name:'Essentials Oversized', icon:'tshirt', price:189.90, old:null, stock:true, free:true, sizes:['P','M','G','GG']},
  {cat:'Moletom', brand:'HELLSTAR', name:'State Heavyweight', icon:'hoodie', price:349.90, old:419.90, stock:true, free:true, sizes:['P','M','G','GG']},
  {cat:'Boné', brand:'BAPE', name:'Aba Reta Classic', icon:'cap', price:129.90, old:null, stock:true, free:false, sizes:['Único']},
  {cat:'Bermuda', brand:'SP5DER', name:'Cargo Tactel', icon:'shorts', price:199.90, old:null, stock:false, free:true, sizes:['P','M','G','GG']},
  {cat:'Calça', brand:'NIKE TECH', name:'Jogger Ripstop', icon:'pants', price:289.90, old:339.90, stock:true, free:true, sizes:['38','40','42','44']},
  {cat:'Corta-vento', brand:'RALPH LAUREN', name:'Windrunner Statewear', icon:'jacket', price:259.90, old:null, stock:true, free:false, sizes:['P','M','G','GG']},
  {cat:'Óculos', brand:'CHROME HEARTS', name:'Retangular Metal', icon:'glasses', price:149.90, old:null, stock:false, free:false, sizes:['Único']},
  {cat:'Corrente', brand:'CHROME HEARTS', name:'Cubana Prata 60cm', icon:'chain', price:169.90, old:199.90, stock:true, free:true, sizes:['50cm','60cm','70cm']},
  {cat:'Tênis', brand:'ASICS', name:'Gel Kayano 14', icon:'sneaker', price:899.90, old:999.90, stock:true, free:true, sizes:['38','39','40','41','42','43','44'],
    colors:[
      {name:'Branco / Prata', img:'images/asics1.jpg'},
      {name:'Creme / Rosa', img:'images/asics2.jpg'},
      {name:'Preto / Prata', img:'images/asics3.jpg'},
      {name:'Azul / Prata', img:'images/asics4.jpg'},
      {name:'Branco / Vermelho', img:'images/asics5.jpg'},
      {name:'Rosa / Cinza / Preto', img:'images/asics6.jpg'}
    ]},
  {cat:'Tênis', brand:'BIRKENSTOCK', name:'Arizona', icon:'sneaker', price:799.90, old:899.90, stock:true, free:true, sizes:['36','37','38','39','40','41','42','43','44'],
    colors:[
      {name:'Preto / Branco Print', img:'images/birken_arizona_print.png'},
      {name:'Azul', img:'images/birken_arizona_blue.png'},
      {name:'Vermelho', img:'images/birken_arizona_red.png'},
      {name:'Pink', img:'images/birken_arizona_pink.png'},
      {name:'Branco Cristal', img:'images/birken_arizona_white.png'},
      {name:'Bege', img:'images/birken_arizona_tan.png'}
    ]},
  {cat:'Tênis', brand:'BIRKENSTOCK', name:'Boston', icon:'sneaker', price:849.90, old:null, stock:true, free:true, sizes:['36','37','38','39','40','41','42','43','44'],
    colors:[
      {name:'Cinza', img:'images/birken_boston_grey.png'},
      {name:'Preto', img:'images/birken_boston_black.png'}
    ]},
  {cat:'Tênis', brand:'JORDAN', name:'JORDAN 5', icon:'sneaker', price:899.90, old:999.90, stock:true, free:true, sizes:['38','39','40','41','42','43','44'],
    colors:[
      {name:'Preto', img:'images/jordan5_black.png'},
      {name:'Branco', img:'images/jordan5_white.png'},
      {name:'Branco / Roxo', img:'images/jordan5_whitepurple.png'}]
  },
  {cat:'Tênis', brand:'DIOR', name:'B30', icon:'sneaker', price:899.90, old:999.90, stock:true, free:true, sizes:['38','39','40','41','42','43','44'],
    colors:[
      {name:'Branco / Bege', img:'images/b30_brancobege.jpg'},
      {name:'Bege', img:'images/b30_bege.jpg'},
      {name:'Azul', img:'images/b30_azul.jpg'},
      {name:'Preto', img:'images/b30_preto.jpg'},
      {name:'Preto / Bege', img:'images/b30_pretobege.jpg'},
      {name:'Preto / Branco', img:'images/b30_pretobranco.jpg'},
      {name:'Branco', img:'images/b30_branco.jpg'}
  ]
  }
];

const brands = ['HELLSTAR', 'CHROME HEARTS', 'ESSENTIAL FEAR GOD', 'BAPE', 'SP5DER', 'RALPH LAUREN', 'NIKE TECH', 'ASICS', 'BIRKENSTOCK'];

const money = v => v.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});

function cardFrontIcon(p){
  return p.icon === 'sneaker' ? sneakerImg(p.colors[0]) : icons[p.icon + '_front'];
}
function cardBackIcon(p){
  return p.icon === 'sneaker' ? '' : icons[p.icon + '_back'];
}

let activeCategory = 'Todos';
let activeBrand = 'Todas';

function matchesCategory(p, categoryFilter) {
  if (!categoryFilter || categoryFilter === 'Todos') return true;
  const catLower = p.cat.toLowerCase();
  const filterLower = categoryFilter.toLowerCase();
  if (filterLower === 'camisetas') return catLower === 'camiseta';
  if (filterLower === 'moletom / jaqueta') return catLower === 'moletom' || catLower === 'corta-vento';
  if (filterLower === 'bermudas') return catLower === 'bermuda';
  if (filterLower === 'calças') return catLower === 'calça';
  if (filterLower === 'bonés') return catLower === 'boné';
  if (filterLower === 'óculos') return catLower === 'óculos';
  if (filterLower === 'correntes') return catLower === 'corrente';
  return catLower === filterLower;
}

function matchesBrand(p, brandFilter) {
  if (!brandFilter || brandFilter === 'Todas') return true;
  return p.brand === brandFilter;
}

function renderProducts(categoryFilter = activeCategory, brandFilter = activeBrand) {
  activeCategory = categoryFilter;
  activeBrand = brandFilter;

  const filtered = products.filter(p => matchesCategory(p, categoryFilter) && matchesBrand(p, brandFilter));

  const grid = document.getElementById('productGrid');
  const emptyMsg = document.getElementById('catalogEmpty');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  grid.innerHTML = filtered.map((p) => {
    const originalIndex = products.indexOf(p);
    const discount = p.old ? Math.round((1 - p.price/p.old)*100) : null;
    return `
    <div class="card" data-index="${originalIndex}">
      <div class="card__media">
        ${discount ? `<span class="badge">-${discount}%</span>` : ''}
        ${p.free ? `<span class="badge free">Frete grátis</span>` : ''}
        <div class="angle front">${cardFrontIcon(p)}</div>
        <div class="angle back">${cardBackIcon(p)}</div>
        ${!p.stock ? `<div class="sold-out"><span>Esgotado</span></div>` : ''}
      </div>
      <div class="card__body">
        <span class="card__brand">${p.brand}</span>
        <span class="card__cat">${p.cat}</span>
        <span class="card__name">${p.name}</span>
        <div class="card__prices">
          ${p.old ? `<span class="price-old">R$ ${money(p.old)}</span>` : ''}
          <span class="price-new">R$ ${money(p.price)}</span>
        </div>
        <button class="add-btn" data-index="${originalIndex}">
          ${p.stock ? 'Comprar' : 'Esgotado'}
        </button>
      </div>
    </div>`;
  }).join('');
}

// Inicializar vitrine
renderProducts('Todos', 'Todas');

// ---------- filtro de categorias ----------
document.querySelector('#categoryFilters').addEventListener('click', e => {
  const pill = e.target.closest('.cat-pill');
  if (!pill) return;
  e.preventDefault();

  document.querySelectorAll('#categoryFilters .cat-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');

  const category = pill.textContent.trim();
  renderProducts(category, activeBrand);
  document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth' });
});

// ---------- filtro de marcas ----------
document.querySelector('#brandFilters').addEventListener('click', e => {
  const pill = e.target.closest('.brand-pill');
  if (!pill) return;
  e.preventDefault();

  document.querySelectorAll('#brandFilters .brand-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');

  const brand = pill.dataset.brand;
  renderProducts(activeCategory, brand);
  document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth' });
});

// Reset dos filtros (categoria + marca)
function resetFilters(e){
  if (e) e.preventDefault();
  document.querySelectorAll('#categoryFilters .cat-pill').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('#brandFilters .brand-pill').forEach(p => p.classList.remove('active'));
  const todosPill = document.querySelector('#categoryFilters a.cat-pill:first-of-type');
  const todasPill = document.querySelector('#brandFilters button.brand-pill:first-of-type');
  if (todosPill) todosPill.classList.add('active');
  if (todasPill) todasPill.classList.add('active');
  renderProducts('Todos', 'Todas');
  document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.see-all').forEach(link => {
  link.addEventListener('click', resetFilters);
});

// ---------- carrinho (visual, sem persistência) ----------
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');

// ---------- estado da página de produto ----------
const overlay = document.getElementById('overlay');
const productPage = document.getElementById('productPage');
const sizeOptionsEl = document.getElementById('sizeOptions');
const qtyValueEl = document.getElementById('qtyValue');
const cepInput = document.getElementById('cepInput');
const freteResultEl = document.getElementById('freteResult');
const drawerAddBtn = document.getElementById('drawerAddBtn');
const drawerConfirm = document.getElementById('drawerConfirm');
const galleryImageEl = document.getElementById('galleryImage');
const galleryThumbsEl = document.getElementById('galleryThumbs');
const galleryDiscountEl = document.getElementById('galleryDiscount');
const galleryFreeEl = document.getElementById('galleryFree');
const gallerySoldOutEl = document.getElementById('gallerySoldOut');
const installmentsEl = document.getElementById('installments');
const productDescriptionEl = document.getElementById('productDescription');
const similarGridEl = document.getElementById('similarGrid');
const breadcrumbCatEl = document.getElementById('breadcrumbCat');

let currentProduct = null;
let currentIndex = null;
let selectedSize = null;
let selectedColor = null;
let qty = 1;
let freteCalculado = null;

const colorBlockEl = document.getElementById('colorBlock');
const colorOptionsEl = document.getElementById('colorOptions');
const colorSelectedNameEl = document.getElementById('colorSelectedName');

// descrições genéricas por tipo de peça (reaproveitadas entre produtos do mesmo tipo)
const descriptions = {
  tshirt: 'Camiseta em malha 100% algodão, corte oversized e caimento reto. Peça-base pra montar qualquer fit streetwear, do casual ao mais montado.',
  hoodie: 'Moletom em algodão peruado, forro felpudo por dentro pra maior conforto. Corte oversized, ideal pra usar sozinho ou em camadas.',
  cap: 'Boné em sarja resistente, aba reta e ajuste traseiro. Acessório clássico do streetwear, combina com qualquer produção.',
  shorts: 'Bermuda em tactel leve, cós com elástico e cordão de ajuste. Boa pra dias quentes sem perder a estética de rua.',
  pants: 'Calça em ripstop resistente, corte jogger com punho no tornozelo. Conforto de moletom com cara de calça de grife.',
  jacket: 'Corta-vento em nylon impermeável, forro leve e capuz ajustável. Proteção contra vento e chuva fraca sem abrir mão do estilo.',
  glasses: 'Óculos com armação retangular em metal e lentes com proteção UV. Acessório que fecha qualquer produção streetwear.',
  chain: 'Corrente banhada, elo grosso e fecho reforçado. Acessório statement pra dar aquele toque a mais no visual.',
  sneaker: 'Tênis de corrida com amortecimento em gel, cabedal respirável e entressola resistente. Conforto pro dia a dia com visual de peça de grife.'
};

function updateBreadcrumb(cat, brand){
  breadcrumbCatEl.textContent = `${brand} / ${cat}`;
}

function renderInstallments(price){
  const parcela = price / 12;
  installmentsEl.textContent = `ou 12x de R$ ${money(parcela)} sem juros`;
}

function renderGallery(p){
  if (p.colors && p.colors.length) {
    selectedColor = null;
    galleryImageEl.innerHTML = sneakerImg(p.colors[0]);
    galleryThumbsEl.innerHTML = '';

    colorBlockEl.style.display = 'block';
    colorSelectedNameEl.textContent = '';
    colorOptionsEl.innerHTML = p.colors.map((c, i) => `
      <button type="button" class="color-opt" data-color-index="${i}" title="${c.name}" aria-label="${c.name}">
        <img class="color-opt__swatch" src="${c.img}" alt="${c.name}">
      </button>
    `).join('');
  } else {
    colorBlockEl.style.display = 'none';
    colorOptionsEl.innerHTML = '';
    galleryImageEl.innerHTML = icons[p.icon + '_front'];
    galleryThumbsEl.innerHTML = `
      <div class="gallery-thumb active" data-angle="front">${icons[p.icon + '_front']}</div>
      <div class="gallery-thumb" data-angle="back">${icons[p.icon + '_back']}</div>
    `;
  }

  const discount = p.old ? Math.round((1 - p.price / p.old) * 100) : null;
  if (discount) {
    galleryDiscountEl.textContent = `-${discount}%`;
    galleryDiscountEl.style.display = 'block';
  } else {
    galleryDiscountEl.style.display = 'none';
  }
  galleryFreeEl.style.display = p.free ? 'block' : 'none';
  gallerySoldOutEl.style.display = p.stock ? 'none' : 'flex';
}

galleryThumbsEl && galleryThumbsEl.addEventListener('click', e => {
  const thumb = e.target.closest('.gallery-thumb');
  if (!thumb || !currentProduct) return;
  galleryThumbsEl.querySelectorAll('.gallery-thumb').forEach(t => t.classList.toggle('active', t === thumb));
  galleryImageEl.innerHTML = icons[currentProduct.icon + '_' + thumb.dataset.angle];
});

colorOptionsEl && colorOptionsEl.addEventListener('click', e => {
  const btn = e.target.closest('.color-opt');
  if (!btn || !currentProduct || !currentProduct.colors) return;
  const color = currentProduct.colors[Number(btn.dataset.colorIndex)];
  selectedColor = color;
  colorOptionsEl.querySelectorAll('.color-opt').forEach(b => b.classList.toggle('selected', b === btn));
  colorSelectedNameEl.textContent = color.name;
  galleryImageEl.innerHTML = sneakerImg(color);
  updateAddButton();
});

function renderSimilar(p, index){
  let similares = products
    .map((prod, i) => ({ prod, i }))
    .filter(item => item.prod.cat === p.cat && item.i !== index)
    .slice(0, 4);

  // fallback: catálogo ainda pequeno, sem outra peça da mesma categoria — mostra outras peças
  if (similares.length === 0) {
    similares = products
      .map((prod, i) => ({ prod, i }))
      .filter(item => item.i !== index)
      .slice(0, 4);
  }

  if (similares.length === 0) {
    similarGridEl.innerHTML = `<p style="color:var(--gray);font-size:13.5px;">Nenhuma outra peça no catálogo no momento.</p>`;
    return;
  }

  similarGridEl.innerHTML = similares.map(({ prod, i }) => {
    const discount = prod.old ? Math.round((1 - prod.price / prod.old) * 100) : null;
    return `
    <div class="card" data-index="${i}">
      <div class="card__media">
        ${discount ? `<span class="badge">-${discount}%</span>` : ''}
        ${prod.free ? `<span class="badge free">Frete grátis</span>` : ''}
        <div class="angle front">${cardFrontIcon(prod)}</div>
        <div class="angle back">${cardBackIcon(prod)}</div>
        ${!prod.stock ? `<div class="sold-out"><span>Esgotado</span></div>` : ''}
      </div>
      <div class="card__body">
        <span class="card__cat">${prod.cat}</span>
        <span class="card__name">${prod.name}</span>
        <div class="card__prices">
          ${prod.old ? `<span class="price-old">R$ ${money(prod.old)}</span>` : ''}
          <span class="price-new">R$ ${money(prod.price)}</span>
        </div>
        <button class="add-btn" data-index="${i}">${prod.stock ? 'Comprar' : 'Esgotado'}</button>
      </div>
    </div>`;
  }).join('');
}

similarGridEl && similarGridEl.addEventListener('click', e => {
  const trigger = e.target.closest('[data-index]');
  if (!trigger) return;
  openDrawer(Number(trigger.dataset.index));
});

function openDrawer(index){
  const p = products[index];
  currentProduct = p;
  currentIndex = index;
  selectedSize = null;
  selectedColor = null;
  qty = 1;
  freteCalculado = null;

  updateBreadcrumb(p.cat, p.brand);
  renderGallery(p);
  document.getElementById('drawerCat').textContent = `${p.brand} · ${p.cat}`;
  document.getElementById('drawerName').textContent = p.name;
  document.getElementById('drawerOld').textContent = p.old ? `R$ ${money(p.old)}` : '';
  document.getElementById('drawerPrice').textContent = `R$ ${money(p.price)}`;
  renderInstallments(p.price);
  productDescriptionEl.textContent = descriptions[p.icon] || '';
  renderSimilar(p, index);

  sizeOptionsEl.innerHTML = p.sizes.map(s => `<button type="button" class="size-opt" data-size="${s}">${s}</button>`).join('');
  qtyValueEl.textContent = qty;
  cepInput.value = '';
  freteResultEl.innerHTML = '';
  drawerConfirm.classList.remove('show');
  updateAddButton();

  closeCartDrawer();
  closeSuggestionDrawer();
  productPage.classList.add('open');
  productPage.querySelector('.product-page__scroll').scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeDrawer(){
  productPage.classList.remove('open');
  document.body.style.overflow = '';
}

function updateAddButton(){
  if (!currentProduct.stock){
    drawerAddBtn.disabled = true;
    drawerAddBtn.textContent = 'Produto esgotado';
    return;
  }
  if (!selectedSize){
    drawerAddBtn.disabled = true;
    drawerAddBtn.textContent = 'Selecione um tamanho';
  } else if (currentProduct.colors && !selectedColor){
    drawerAddBtn.disabled = true;
    drawerAddBtn.textContent = 'Selecione uma cor';
  } else {
    drawerAddBtn.disabled = false;
    drawerAddBtn.textContent = 'Adicionar ao carrinho';
  }
}

// abrir painel ao clicar no card ou no botão do card
document.getElementById('productGrid').addEventListener('click', e => {
  const trigger = e.target.closest('[data-index]');
  if (!trigger) return;
  openDrawer(Number(trigger.dataset.index));
});

document.getElementById('productBackBtn').addEventListener('click', closeDrawer);
overlay.addEventListener('click', () => {
  closeCartDrawer();
  closeSuggestionDrawer();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeDrawer();
    closeCartDrawer();
    closeSuggestionDrawer();
  }
});

// seleção de tamanho
sizeOptionsEl.addEventListener('click', e => {
  const btn = e.target.closest('.size-opt');
  if (!btn) return;
  selectedSize = btn.dataset.size;
  sizeOptionsEl.querySelectorAll('.size-opt').forEach(b => b.classList.toggle('selected', b === btn));
  updateAddButton();
});

// quantidade
document.getElementById('qtyMinus').addEventListener('click', () => {
  qty = Math.max(1, qty - 1);
  qtyValueEl.textContent = qty;
});
document.getElementById('qtyPlus').addEventListener('click', () => {
  qty = Math.min(10, qty + 1);
  qtyValueEl.textContent = qty;
});

// ---------- máscara simples de CEP ----------
cepInput.addEventListener('input', () => {
  let v = cepInput.value.replace(/\D/g, '').slice(0, 8);
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5);
  cepInput.value = v;
});

// ---------- tabela de frete por região (estimativa) ----------
const regioes = {
  SP:1, RJ:1, MG:1, ES:1,
  PR:1.2, SC:1.2, RS:1.2,
  GO:1.4, MT:1.4, MS:1.4, DF:1.4,
  BA:1.7, PE:1.7, CE:1.7, MA:1.7, PB:1.7, RN:1.7, AL:1.7, SE:1.7, PI:1.7,
  AM:2.2, PA:2.2, AC:2.2, RO:2.2, RR:2.2, AP:2.2, TO:2.2
};

function calcularFrete(uf, subtotal){
  const mult = regioes[uf] || 1.5;
  const gratis = subtotal >= 299;
  const pac = { nome:'PAC', dias: Math.round(3 * mult) + 1, preco: gratis ? 0 : Math.round(14.9 * mult * 100) / 100 };
  const sedex = { nome:'SEDEX', dias: Math.round(1.5 * mult) + 1, preco: Math.round(29.9 * mult * 100) / 100 };
  return { pac, sedex, gratis };
}

document.getElementById('calcFreteBtn').addEventListener('click', async () => {
  const cepLimpo = cepInput.value.replace(/\D/g, '');
  freteResultEl.innerHTML = '';

  if (cepLimpo.length !== 8){
    freteResultEl.innerHTML = `<div class="frete-error">Digite um CEP válido (8 números).</div>`;
    return;
  }

  const btn = document.getElementById('calcFreteBtn');
  btn.disabled = true;
  btn.textContent = 'Calculando...';

  try {
    const resp = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const data = await resp.json();

    if (data.erro){
      freteResultEl.innerHTML = `<div class="frete-error">CEP não encontrado. Confira e tente de novo.</div>`;
      return;
    }

    const subtotal = currentProduct.price * qty;
    const resultado = calcularFrete(data.uf, subtotal);
    freteCalculado = resultado;

    freteResultEl.innerHTML = `
      <div class="frete-loc">Entrega para ${data.localidade} / ${data.uf}</div>
      <div class="frete-result">
        <div class="frete-opt"><span>PAC · até ${resultado.pac.dias} dias úteis</span>
          <b>${resultado.gratis ? '<span class="free-tag">Grátis</span>' : 'R$ ' + money(resultado.pac.preco)}</b>
        </div>
        <div class="frete-opt"><span>SEDEX · até ${resultado.sedex.dias} dias úteis</span>
          <b>R$ ${money(resultado.sedex.preco)}</b>
        </div>
      </div>
    `;
  } catch (err){
    freteResultEl.innerHTML = `<div class="frete-error">Não foi possível calcular o frete agora. Tente novamente.</div>`;
  } finally {
    btn.disabled = false;
    btn.textContent = 'Calcular';
  }
});

// ---------- adicionar ao carrinho (a partir do painel) ----------
drawerAddBtn.addEventListener('click', () => {
  if (drawerAddBtn.disabled) return;
  
  addToCart(currentProduct, selectedSize, qty, selectedColor);
  
  drawerConfirm.classList.add('show');
  setTimeout(() => { closeDrawer(); }, 900);
});

// ---------- menu mobile (abre/fecha o dropdown de navegação) ----------
const burgerBtn = document.getElementById('burgerBtn');
const navlinksEl = document.querySelector('.navlinks');

function closeMobileMenu(){
  navlinksEl.classList.remove('open');
  burgerBtn.classList.remove('open');
}

burgerBtn.addEventListener('click', () => {
  navlinksEl.classList.toggle('open');
  burgerBtn.classList.toggle('open');
});

// fecha o menu ao clicar em qualquer link dele
navlinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// fecha o menu ao clicar fora dele
document.addEventListener('click', e => {
  if (!navlinksEl.contains(e.target) && e.target !== burgerBtn && !burgerBtn.contains(e.target)) {
    closeMobileMenu();
  }
});

// ---------- lógica do carrinho de compras ----------
let cart = [];
let cartFrete = null; // { tipo, preco, dias } — só existe depois que o cliente ESCOLHE uma opção
const cartDrawer = document.getElementById('cartDrawer');
const cartDrawerClose = document.getElementById('cartDrawerClose');
const cartBtn = document.getElementById('cartBtn');
const cartItemsList = document.getElementById('cartItemsList');
const cartSubtotal = document.getElementById('cartSubtotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const cartCepInput = document.getElementById('cartCepInput');
const cartCalcFreteBtn = document.getElementById('cartCalcFreteBtn');
const cartFreteOptions = document.getElementById('cartFreteOptions');
const cartFreteRow = document.getElementById('cartFreteRow');
const cartFreteValue = document.getElementById('cartFreteValue');
const cartTotalRow = document.getElementById('cartTotalRow');
const cartTotalValue = document.getElementById('cartTotalValue');
const cartFreightWarning = document.getElementById('cartFreightWarning');

function getCartSubtotal(){
  return cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
}

function openCartDrawer() {
  closeDrawer();
  closeSuggestionDrawer();
  overlay.classList.add('open');
  cartDrawer.classList.add('open');
}

function closeCartDrawer() {
  overlay.classList.remove('open');
  cartDrawer.classList.remove('open');
}

cartBtn.addEventListener('click', openCartDrawer);
cartDrawerClose.addEventListener('click', closeCartDrawer);

function addToCart(product, size, quantity, color) {
  const colorName = color ? color.name : null;
  const existingIndex = cart.findIndex(item => item.product.name === product.name && item.size === size && item.colorName === colorName);
  if (existingIndex > -1) {
    cart[existingIndex].qty += quantity;
  } else {
    cart.push({
      product: product,
      size: size,
      colorName: colorName,
      qty: quantity
    });
  }
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCartQty(index, newQty) {
  if (newQty < 1) return;
  cart[index].qty = newQty;
  updateCart();
}

function updateCart() {
  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = totalItemsCount;

  // o subtotal mudou (item add/remov./qty) — o frete calculado antes não vale mais
  const hadFrete = cartFrete !== null;
  cartFrete = null;
  cartFreteOptions.innerHTML = '';
  cartFreightWarning.classList.toggle('show', hadFrete && cart.length > 0);

  renderCart();
  updateCartTotals();
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<div class="cart-empty">Seu carrinho está vazio.</div>';
    cartSubtotal.textContent = 'R$ 0,00';
    checkoutBtn.disabled = true;
    return;
  }

  checkoutBtn.disabled = false;
  let subtotal = 0;

  cartItemsList.innerHTML = cart.map((item, idx) => {
    const itemTotal = item.product.price * item.qty;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <div class="cart-item__media">
          ${item.product.icon === 'sneaker' ? sneakerImg(item.product.colors.find(c => c.name === item.colorName) || item.product.colors[0]) : icons[item.product.icon + '_front']}
        </div>
        <div class="cart-item__info">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
            <div>
              <h4 class="cart-item__name" style="margin:0; font-size:13px; line-height:1.2;">${item.product.name}</h4>
              <span class="cart-item__meta">Tam: ${item.size}${item.colorName ? ' · Cor: ' + item.colorName : ''} · ${item.product.cat}</span>
            </div>
            <button class="cart-item__remove" onclick="removeFromCart(${idx})">Remover</button>
          </div>
          <div class="cart-item__bottom">
            <div class="cart-item__qty">
              <button type="button" onclick="updateCartQty(${idx}, ${item.qty - 1})">−</button>
              <span>${item.qty}</span>
              <button type="button" onclick="updateCartQty(${idx}, ${item.qty + 1})">+</button>
            </div>
            <span class="cart-item__price">R$ ${money(itemTotal)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  cartSubtotal.textContent = `R$ ${money(subtotal)}`;

  // Alerta de frete grátis no carrinho
  const limiteFrete = 299;
  const faltaParaFrete = limiteFrete - subtotal;
  let hintHTML = '';
  if (faltaParaFrete > 0) {
    hintHTML = `<div class="cart-hint" style="font-size:11.5px; color:var(--gray); margin-top: 14px; text-align:center; padding-top:10px; border-top:1px dashed var(--line);">Faltam <b>R$ ${money(faltaParaFrete)}</b> para ganhar <b>Frete Grátis</b>!</div>`;
  } else {
    hintHTML = `<div class="cart-hint" style="font-size:11.5px; color:var(--red); margin-top: 14px; text-align:center; padding-top:10px; border-top:1px dashed var(--line); font-weight:700;">✓ Você ganhou <b>Frete Grátis</b>!</div>`;
  }
  cartItemsList.insertAdjacentHTML('beforeend', hintHTML);
}

// Tornar funções disponíveis globalmente para os onclick handlers
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.closeCartDrawer = closeCartDrawer;

// ---------- máscara de CEP no carrinho ----------
cartCepInput.addEventListener('input', () => {
  let v = cartCepInput.value.replace(/\D/g, '').slice(0, 8);
  if (v.length > 5) v = v.slice(0, 5) + '-' + v.slice(5);
  cartCepInput.value = v;
});

// ---------- calcular frete do carrinho (mostra as opções, ainda não escolhe nenhuma) ----------
cartCalcFreteBtn.addEventListener('click', async () => {
  const cepLimpo = cartCepInput.value.replace(/\D/g, '');
  cartFreteOptions.innerHTML = '';
  cartFreightWarning.classList.remove('show');

  if (cart.length === 0) return;

  if (cepLimpo.length !== 8) {
    cartFreteOptions.innerHTML = `<div class="frete-error">Digite um CEP válido (8 números).</div>`;
    return;
  }

  cartCalcFreteBtn.disabled = true;
  cartCalcFreteBtn.textContent = 'Calculando...';

  try {
    const resp = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const data = await resp.json();

    if (data.erro) {
      cartFreteOptions.innerHTML = `<div class="frete-error">CEP não encontrado. Confira e tente de novo.</div>`;
      return;
    }

    const subtotal = getCartSubtotal();
    const resultado = calcularFrete(data.uf, subtotal);

    cartFreteOptions.innerHTML = `
      <div class="frete-loc">Entrega para ${data.localidade} / ${data.uf}</div>
      <div class="frete-result">
        <div class="frete-opt selectable" data-tipo="pac" data-preco="${resultado.pac.preco}">
          <span>PAC · até ${resultado.pac.dias} dias úteis</span>
          <b>${resultado.gratis ? '<span class="free-tag">Grátis</span>' : 'R$ ' + money(resultado.pac.preco)}</b>
        </div>
        <div class="frete-opt selectable" data-tipo="sedex" data-preco="${resultado.sedex.preco}">
          <span>SEDEX · até ${resultado.sedex.dias} dias úteis</span>
          <b>R$ ${money(resultado.sedex.preco)}</b>
        </div>
      </div>
    `;

    // frete calculado, mas o cliente ainda precisa clicar numa opção
    cartFrete = null;
    updateCartTotals();
  } catch (err) {
    cartFreteOptions.innerHTML = `<div class="frete-error">Não foi possível calcular o frete agora. Tente novamente.</div>`;
  } finally {
    cartCalcFreteBtn.disabled = false;
    cartCalcFreteBtn.textContent = 'Calcular';
  }
});

// ---------- escolher a opção de frete ----------
cartFreteOptions.addEventListener('click', e => {
  const opt = e.target.closest('.frete-opt.selectable');
  if (!opt) return;

  cartFreteOptions.querySelectorAll('.frete-opt').forEach(o => o.classList.toggle('selected', o === opt));
  cartFrete = {
    tipo: opt.dataset.tipo,
    preco: Number(opt.dataset.preco)
  };
  cartFreightWarning.classList.remove('show');
  updateCartTotals();
});

// ---------- atualizar linhas de frete/total e liberar o botão de finalizar ----------
function updateCartTotals() {
  const subtotal = getCartSubtotal();

  if (!cartFrete) {
    cartFreteRow.style.display = 'none';
    cartTotalRow.style.display = 'none';
    checkoutBtn.disabled = true;
    checkoutBtn.textContent = cart.length === 0 ? 'Finalizar Compra' : 'Selecione o frete';
    return;
  }

  cartFreteRow.style.display = 'flex';
  cartTotalRow.style.display = 'flex';
  cartFreteValue.textContent = cartFrete.preco === 0 ? 'Grátis' : `R$ ${money(cartFrete.preco)}`;
  cartTotalValue.textContent = `R$ ${money(subtotal + cartFrete.preco)}`;
  checkoutBtn.disabled = false;
  checkoutBtn.textContent = 'Finalizar Compra';
}

updateCartTotals();

// ---------- finalização de compra (whatsapp) ----------
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0 || !cartFrete) return;

  let message = `Olá, STATEWEAR! Gostaria de finalizar o meu pedido:\n\n*Itens do pedido:*\n`;
  const subtotal = getCartSubtotal();

  cart.forEach(item => {
    const itemTotal = item.product.price * item.qty;
    const corTexto = item.colorName ? `, Cor: ${item.colorName}` : '';
    message += `• ${item.qty}x ${item.product.name} (Tamanho: ${item.size}${corTexto}) - R$ ${money(itemTotal)}\n`;
  });

  const freteLabel = cartFrete.tipo === 'sedex' ? 'SEDEX' : 'PAC';
  const freteTexto = cartFrete.preco === 0 ? 'Grátis' : `R$ ${money(cartFrete.preco)} (${freteLabel})`;
  const total = subtotal + cartFrete.preco;

  message += `\n*Subtotal:* R$ ${money(subtotal)}\n`;
  message += `*Frete:* ${freteTexto}\n`;
  message += `*Total:* R$ ${money(total)}\n\n`;
  message += `Gostaria de combinar os detalhes da entrega e pagamento!`;

  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/5511999999999?text=${encodedText}`;

  window.open(waUrl, '_blank');
});

// ================= PAINEL: SUGERIR UMA PEÇA =================
const suggestionDrawer = document.getElementById('suggestionDrawer');
const suggestionDrawerClose = document.getElementById('suggestionDrawerClose');
const suggestBtn = document.getElementById('suggestBtn');
const suggestNavLink = document.getElementById('suggestNavLink');
const suggestionSendBtn = document.getElementById('suggestionSendBtn');
const suggestionConfirm = document.getElementById('suggestionConfirm');
const suggestionImgHint = document.getElementById('suggestionImgHint');

const suggName = document.getElementById('suggName');
const suggBrand = document.getElementById('suggBrand');
const suggLink = document.getElementById('suggLink');
const suggSize = document.getElementById('suggSize');
const suggNotes = document.getElementById('suggNotes');
const suggYourName = document.getElementById('suggYourName');
const suggYourPhone = document.getElementById('suggYourPhone');

const uploadArea = document.getElementById('uploadArea');
const uploadPlaceholder = document.getElementById('uploadPlaceholder');
const uploadPreview = document.getElementById('uploadPreview');
const uploadPreviewImg = document.getElementById('uploadPreviewImg');
const uploadRemoveBtn = document.getElementById('uploadRemoveBtn');
const suggImageInput = document.getElementById('suggImageInput');

let suggestionHasImage = false;

function openSuggestionDrawer(){
  closeDrawer();
  closeCartDrawer();
  overlay.classList.add('open');
  suggestionDrawer.classList.add('open');
}

function closeSuggestionDrawer(){
  overlay.classList.remove('open');
  suggestionDrawer.classList.remove('open');
}

suggestBtn.addEventListener('click', openSuggestionDrawer);
suggestNavLink.addEventListener('click', e => {
  e.preventDefault();
  openSuggestionDrawer();
});
suggestionDrawerClose.addEventListener('click', closeSuggestionDrawer);

// ---------- validação dos campos obrigatórios ----------
function updateSuggestionButton(){
  const valid = suggName.value.trim() && suggYourName.value.trim() && suggYourPhone.value.trim();
  suggestionSendBtn.disabled = !valid;
  suggestionSendBtn.textContent = valid ? 'Enviar sugestão via WhatsApp' : 'Preencha os campos obrigatórios';
}
[suggName, suggYourName, suggYourPhone].forEach(field => {
  field.addEventListener('input', updateSuggestionButton);
});
updateSuggestionButton();

// ---------- máscara de telefone ----------
suggYourPhone.addEventListener('input', () => {
  let v = suggYourPhone.value.replace(/\D/g, '').slice(0, 11);
  if (v.length > 10) {
    v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
  } else if (v.length > 6) {
    v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else if (v.length > 2) {
    v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  } else if (v.length > 0) {
    v = '(' + v;
  }
  suggYourPhone.value = v;
});

// ---------- upload de imagem (com preview e drag & drop) ----------
function showImagePreview(file){
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = e => {
    uploadPreviewImg.src = e.target.result;
    uploadPlaceholder.style.display = 'none';
    uploadPreview.style.display = 'flex';
    suggestionHasImage = true;
    suggestionImgHint.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

uploadArea.addEventListener('click', e => {
  if (e.target.closest('#uploadRemoveBtn')) return;
  suggImageInput.click();
});

suggImageInput.addEventListener('change', () => {
  if (suggImageInput.files[0]) showImagePreview(suggImageInput.files[0]);
});

['dragover', 'dragleave', 'drop'].forEach(evt => {
  uploadArea.addEventListener(evt, e => {
    e.preventDefault();
    e.stopPropagation();
    if (evt === 'dragover') uploadArea.classList.add('dragover');
    if (evt === 'dragleave') uploadArea.classList.remove('dragover');
    if (evt === 'drop') {
      uploadArea.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file) {
        suggImageInput.files = e.dataTransfer.files;
        showImagePreview(file);
      }
    }
  });
});

uploadRemoveBtn.addEventListener('click', e => {
  e.stopPropagation();
  suggImageInput.value = '';
  uploadPreviewImg.src = '';
  uploadPreview.style.display = 'none';
  uploadPlaceholder.style.display = 'flex';
  suggestionHasImage = false;
  suggestionImgHint.style.display = 'none';
});

// ---------- envio (monta a mensagem e abre o WhatsApp) ----------
function resetSuggestionForm(){
  [suggName, suggBrand, suggLink, suggSize, suggNotes, suggYourName, suggYourPhone].forEach(f => f.value = '');
  suggImageInput.value = '';
  uploadPreviewImg.src = '';
  uploadPreview.style.display = 'none';
  uploadPlaceholder.style.display = 'flex';
  suggestionHasImage = false;
  suggestionImgHint.style.display = 'none';
  suggestionConfirm.classList.remove('show');
  updateSuggestionButton();
}

suggestionSendBtn.addEventListener('click', () => {
  if (suggestionSendBtn.disabled) return;

  let message = `Olá, STATEWEAR! Quero sugerir uma peça pra loja:\n\n`;
  message += `*Peça:* ${suggName.value.trim()}\n`;
  message += `*Marca/referência:* ${suggBrand.value.trim() || '-'}\n`;
  message += `*Link:* ${suggLink.value.trim() || '-'}\n`;
  message += `*Tamanho desejado:* ${suggSize.value.trim() || '-'}\n`;
  message += `*Observações:* ${suggNotes.value.trim() || '-'}\n\n`;
  message += `*Meu nome:* ${suggYourName.value.trim()}\n`;
  message += `*Meu WhatsApp:* ${suggYourPhone.value.trim()}\n`;
  if (suggestionHasImage) {
    message += `\nP.S.: vou anexar aqui na conversa uma foto de referência da peça.`;
  }

  const encodedText = encodeURIComponent(message);
  const waUrl = `https://wa.me/5511999999999?text=${encodedText}`;
  window.open(waUrl, '_blank');

  suggestionConfirm.classList.add('show');
  setTimeout(() => {
    closeSuggestionDrawer();
    resetSuggestionForm();
  }, 2200);
});
