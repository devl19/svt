const plantData = {
  rose: {
    title: 'زهرة الورد',
    img: 'A.jpeg',
    desc: 'زهرة الورد رمز الجمال والرائحة العطرة، ألوانها متعددة وتستخدم في الزينة.',
    anatomy: 'A2.jpeg',
    anatomyText: 'بتلات، سبلات، أسدية، كربلة، ساق شوكية.'
  },
  tulip: {
    title: 'زهرة التوليب',
    img: 'T.jpeg',
    desc: 'التوليب زهرة ربيعية بألوان زاهية، رمز للأمل والجمال.',
    anatomy: 'T2.jpeg',
    anatomyText: '6 بتلات، 6 أسدية، كربلة واحدة، بصلة تحت الأرض.'
  },
  orchid: {
    title: 'زهرة الأوركيد',
    img: 'E.jpeg',
    desc: 'الأوركيد من أجمل الزهور وأكثرها تنوعًا، تعيش في المناطق الاستوائية.',
    anatomy: 'E2.jpeg',
    anatomyText: '3 بتلات، 3 سبلات، شفاه، عمود مركزي، جذور هوائية.'
  },
  lys: {
    title: 'الزنبق',
    img: 'lys.jpeg',
    desc: 'الزنبق زهرة أنيقة بيضاء أو ملونة، ترمز للنقاء.',
    anatomy: 'lys2.jpeg',
    anatomyText: '6 بتلات، 6 أسدية، كربلة، بصلة.'
  },
  marguerite: {
    title: 'الأقحوان',
    img: 'marguerite.jpeg',
    desc: 'الأقحوان زهرة بيضاء ذات قلب أصفر، منتشرة في الحقول.',
    anatomy: 'marguerite2.jpeg',
    anatomyText: 'بتلات بيضاء، مركز أصفر، ساق رفيعة.'
  },
  tournesol: {
    title: 'دوار الشمس',
    img: 'tournesol.jpeg',
    desc: 'دوار الشمس زهرة كبيرة تتبع الشمس، بذورها مغذية.',
    anatomy: 'tournesol2.jpeg',
    anatomyText: 'قرص مركزي، بتلات صفراء، ساق قوية.'
  },
  violette: {
    title: 'البنفسج',
    img: 'violette.jpeg',
    desc: 'البنفسج زهرة صغيرة بنفسجية اللون، رائحتها عطرة.',
    anatomy: 'violette2.jpeg',
    anatomyText: '5 بتلات، أوراق قلبية، ساق رفيعة.'
  },
  pivoine: {
    title: 'الفاوانيا',
    img: 'pivoine.jpeg',
    desc: 'الفاوانيا زهرة كبيرة متعددة الطبقات، ألوانها زاهية.',
    anatomy: 'pivoine2.jpeg',
    anatomyText: 'بتلات كثيرة، أسدية ذهبية، أوراق كثيفة.'
  },
  camélia: {
    title: 'الكاميليا',
    img: 'camelia.jpeg',
    desc: 'الكاميليا تزهر شتاءً، أزهارها كثيفة وملونة.',
    anatomy: 'camelia2.jpeg',
    anatomyText: 'بتلات سميكة، أوراق لامعة، أسدية صفراء.'
  },
  jasmin: {
    title: 'الياسمين',
    img: 'jasmin.jpeg',
    desc: 'الياسمين زهرة بيضاء عطرة، تستخدم في العطور.',
    anatomy: 'jasmin2.jpeg',
    anatomyText: 'أزهار صغيرة بيضاء، أوراق متقابلة.'
  },
  lavande: {
    title: 'الخزامى',
    img: 'lavande.jpeg',
    desc: 'الخزامى زهرة بنفسجية، تستخدم في العطور والطب.',
    anatomy: 'lavande2.jpeg',
    anatomyText: 'سنابل بنفسجية، أوراق ضيقة، ساق خشبية.'
  },
  coquelicot: {
    title: 'الخشخاش',
    img: 'coquelicot.jpeg',
    desc: 'الخشخاش زهرة حمراء تزين الحقول في الربيع.',
    anatomy: 'coquelicot2.jpeg',
    anatomyText: '4 بتلات حمراء، كبسولة بذور، ساق رفيعة.'
  },
  dahlia: {
    title: 'الداليا',
    img: 'dahlia.jpeg',
    desc: 'الداليا زهرة متعددة الألوان والأشكال، تزهر صيفًا.',
    anatomy: 'dahlia2.jpeg',
    anatomyText: 'بتلات كثيرة، جذور درنية.'
  },
  hibiscus: {
    title: 'الكركديه',
    img: 'hibiscus.jpeg',
    desc: 'الكركديه زهرة استوائية حمراء، تستخدم في المشروبات.',
    anatomy: 'hibiscus2.jpeg',
    anatomyText: '5 بتلات، كربلة طويلة، أوراق مسننة.'
  },
  anémone: {
    title: 'شقائق النعمان',
    img: 'anemone.jpeg',
    desc: 'شقائق النعمان زهرة ربيعية حمراء أو بنفسجية.',
    anatomy: 'anemone2.jpeg',
    anatomyText: 'بتلات ملونة، مركز أسود، ساق رفيعة.'
  },
  iris: {
    title: 'السوسن',
    img: 'iris.jpeg',
    desc: 'السوسن زهرة ملونة بأشكال متنوعة، رمز للأمل.',
    anatomy: 'iris2.jpeg',
    anatomyText: '3 بتلات قائمة، 3 سبلات متدلية، جذمور.'
  },
  perce_neige: {
    title: 'زنبق الثلج',
    img: 'perce_neige.jpeg',
    desc: 'زنبق الثلج يزهر في نهاية الشتاء، زهرة بيضاء صغيرة.',
    anatomy: 'perce_neige2.jpeg',
    anatomyText: 'أزهار متدلية بيضاء، بصلة.'
  },
  narcisse: {
    title: 'النرجس',
    img: 'narcisse.jpeg',
    desc: 'النرجس زهرة صفراء أو بيضاء، تزهر في الربيع.',
    anatomy: 'narcisse2.jpeg',
    anatomyText: 'تويج مركزي، بتلات، بصلة.'
  },
  azalée: {
    title: 'الأزاليا',
    img: 'azalee.jpeg',
    desc: 'الأزاليا تزهر بغزارة في الربيع، ألوانها متنوعة.',
    anatomy: 'azalee2.jpeg',
    anatomyText: 'أزهار صغيرة متجمعة، أوراق دائمة الخضرة.'
  },
  cyclamen: {
    title: 'السيكلامين',
    img: 'cyclamen.jpeg',
    desc: 'السيكلامين يزهر شتاءً، أزهاره مقلوبة.',
    anatomy: 'cyclamen2.jpeg',
    anatomyText: 'أزهار مقلوبة، أوراق مرقطة، درنة.'
  },
  freesia: {
    title: 'الفريزيا',
    img: 'freesia.jpeg',
    desc: 'الفريزيا زهرة عطرية، ألوانها زاهية.',
    anatomy: 'freesia2.jpeg',
    anatomyText: 'أزهار عنقودية، ساق رفيعة، بصلة.'
  },
  glaïeul: {
    title: 'سيف الغمد',
    img: 'glaieul.jpeg',
    desc: 'سيف الغمد زهرة طويلة تستخدم في الباقات.',
    anatomy: 'glaieul2.jpeg',
    anatomyText: 'أزهار سنبلية، أوراق سيفية، كورمة.'
  },
  hortensia: {
    title: 'الهورتنسيا',
    img: 'hortensia.jpeg',
    desc: 'الهورتنسيا أزهارها كروية وكبيرة الحجم.',
    anatomy: 'hortensia2.jpeg',
    anatomyText: 'أزهار متجمعة، أوراق عريضة.'
  },
  magnolia: {
    title: 'الماغنوليا',
    img: 'magnolia.jpeg',
    desc: 'الماغنوليا تزهر في بداية الربيع، أزهارها كبيرة.',
    anatomy: 'magnolia2.jpeg',
    anatomyText: 'أزهار كبيرة، أوراق سميكة.'
  },
  myosotis: {
    title: 'لا تنساني',
    img: 'myosotis.jpeg',
    desc: 'زهرة صغيرة زرقاء ترمز للذكرى.',
    anatomy: 'myosotis2.jpeg',
    anatomyText: 'أزهار صغيرة زرقاء، ساق رفيعة.'
  },
  primevère: {
    title: 'زهرة الربيع',
    img: 'primevere.jpeg',
    desc: 'تزهر في نهاية الشتاء وبداية الربيع، ألوانها متعددة.',
    anatomy: 'primevere2.jpeg',
    anatomyText: 'أزهار في شكل وردة، أوراق مجعدة.'
  },
  renoncule: {
    title: 'الشقائق',
    img: 'renoncule.jpeg',
    desc: 'الشقائق زهرة براقة ذات بتلات عديدة.',
    anatomy: 'renoncule2.jpeg',
    anatomyText: 'بتلات كثيرة، ساق مجوفة.'
  },
};

const cards = document.querySelectorAll('.card');
const searchInput = document.getElementById('search-input');

searchInput.placeholder = "Rechercher une plante...";

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  let lastVisible;

  cards.forEach(card => {
    const title = card.querySelector('h2').textContent.trim().toLowerCase();
    if (!query || title.includes(query)) {
      card.style.display = 'block';
      visibleCount++;
      lastVisible = card;
    } else {
      card.style.display = 'none';
    }
  });

  if (visibleCount === 1) {
    document.addEventListener('keydown', function handler(e) {
      if (e.key === 'Enter') {
        lastVisible.click();
        document.removeEventListener('keydown', handler);
      }
    });
  }
});

cards.forEach(card =>
  card.addEventListener('click', () => {
    const key = card.dataset.plant;
    const data = plantData[key];
    document.getElementById('plant-content').innerHTML = `
      <div class="plant-section">
        <h2>${data.title}</h2>
        <img src="${data.img}" alt="${data.title}">
        <p>${data.desc}</p>
        <h3>Anatomie de la ${data.title}</h3>
        <img src="${data.anatomy}" alt="Anatomie de la ${data.title}">
        <p>${data.anatomyText}</p>
      </div>`;
    document.getElementById('cards-view').style.display = 'none';
    document.getElementById('plants-view').style.display = 'block';
  })
);

document.getElementById('btn-back').textContent = "Retour";
document.getElementById('btn-back').addEventListener('click', () => {
  document.getElementById('plants-view').style.display = 'none';
  document.getElementById('cards-view').style.display = 'block';
});