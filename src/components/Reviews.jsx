import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Star, ChevronLeft, ChevronRight, BadgeCheck, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    name: 'Анна К.',
    location: 'Москва',
    rating: 5,
    text: 'Атоми ХемоХИМ — это просто находка! После курса приёма заметила, что стала реже болеть, больше энергии. Всей семьёй принимаем уже полгода и результат налицо.',
    product: 'Атоми ХемоХИМ',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00001/org/617/250523000041617.jpg',
    verified: true,
    likes: 48,
    date: '2 дня назад',
  },
  {
    name: 'Марина Л.',
    location: 'Санкт-Петербург',
    rating: 5,
    text: 'Набор Evening Care — моё спасение! Кожа стала чище и мягче буквально за неделю. Пенка для умывания очень нежная, маска-плёнка вытягивает всё лишнее. Очень довольна!',
    product: 'Атоми Ивнинг Кеар',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00355/org/012/250523000042012.png',
    verified: true,
    likes: 36,
    date: '5 дней назад',
  },
  {
    name: 'Ольга С.',
    location: 'Екатеринбург',
    rating: 5,
    text: 'Зубная паста Атоми — лучшая, что я пробовала. Дёсны перестали кровоточить, зубы стали белее. И хватает надолго — в наборе аж 5 штук!',
    product: 'Атоми Зубная паста',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00505/org/750/250523000041750.jpg',
    verified: true,
    likes: 52,
    date: '1 неделю назад',
  },
  {
    name: 'Елена В.',
    location: 'Новосибирск',
    rating: 5,
    text: 'Солнцезащитный крем за 700 рублей, который лучше аналогов за 3000! Лёгкий, не оставляет белых следов, отлично защищает. Беру уже третий раз, всегда в сумочке.',
    product: 'Солнцезащитный крем',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00285/org/407/250523000042407.jpg',
    verified: true,
    likes: 41,
    date: '2 недели назад',
  },
  {
    name: 'Татьяна Д.',
    location: 'Краснодар',
    rating: 5,
    text: 'Абсолют СеллАктив — это что-то невероятное! Кожа подтянулась, морщинки стали менее заметны. Подруги спрашивают, что я с собой сделала. Эффект виден уже через 2 недели.',
    product: 'Абсолют СеллАктив',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00207/org/033/250523000042033.jpg',
    verified: true,
    likes: 63,
    date: '2 недели назад',
  },
  {
    name: 'Виктор Г.',
    location: 'Казань',
    rating: 5,
    text: 'Омега-3 от Атоми пью уже полгода. Качество отличное, капсулы не пахнут рыбой. Чувствую себя бодрее, суставы перестали хрустеть. Очень доволен!',
    product: 'Аляска Е-Омега 3',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00111/org/782/250730000042782.jpg',
    verified: true,
    likes: 38,
    date: '3 недели назад',
  },
  {
    name: 'Наталья И.',
    location: 'Ростов-на-Дону',
    rating: 5,
    text: 'ББ крем Атоми — идеальный тон! Ложится ровно, не сушит кожу, держится весь день. А цена — 700 рублей! Это просто подарок. Уже пятый тюбик заказываю.',
    product: 'Атоми ББ крем',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00261/org/337/250523000042337.jpg',
    verified: true,
    likes: 45,
    date: '3 недели назад',
  },
  {
    name: 'Ирина М.',
    location: 'Самара',
    rating: 5,
    text: 'Спирулина от Атоми помогла мне восстановить силы после зимы. Натуральный состав, легко принимать. Рекомендую как основу для витаминной поддержки. Отличное качество!',
    product: 'Атоми Спирулина',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00178/org/566/250523000041566.jpg',
    verified: true,
    likes: 29,
    date: '1 месяц назад',
  },
  {
    name: 'Алексей П.',
    location: 'Тюмень',
    rating: 5,
    text: 'Витамин С от Атоми — отличная штука! Принимаю по одному пакетику в день, вкус приятный. За зиму ни разу не болел. Цена адекватная, качество корейское.',
    product: 'Атоми Витамин С',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00121/org/556/250523000041556.jpg',
    verified: true,
    likes: 34,
    date: '1 месяц назад',
  },
  {
    name: 'Светлана Р.',
    location: 'Воронеж',
    rating: 5,
    text: 'Абсолют Набор — лучший подарок для мамы! Полный уход: тонер, эмульсия, сыворотка, крем. Кожа стала бархатистой. Мама в восторге, уже заказали второй раз.',
    product: 'Атоми Абсолют Набор',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00655/org/574/250523000042574.jpg',
    verified: true,
    likes: 57,
    date: '1 месяц назад',
  },
  {
    name: 'Дмитрий К.',
    location: 'Челябинск',
    rating: 5,
    text: 'Кофе Арабика от Атоми — это не просто кофе, это ритуал! Богатый вкус, удобная порционная упаковка. 50 стиков хватает надолго. Рекомендую всем кофеманам!',
    product: 'Атоми Кофе Арабика',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00973/org/651/250523000041651.jpg',
    verified: true,
    likes: 31,
    date: '1 месяц назад',
  },
  {
    name: 'Людмила Б.',
    location: 'Пермь',
    rating: 5,
    text: 'Маска для лица «Мёд и Женьшень» — восторг! Кожа после неё сияющая и напитанная. Натуральный состав, без химии. Использую 2 раза в неделю и довольна.',
    product: 'Маска Мёд и Женьшень',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R01516/org/674/250524000042674.png',
    verified: true,
    likes: 42,
    date: '2 месяца назад',
  },
  {
    name: 'Андрей Н.',
    location: 'Уфа',
    rating: 5,
    text: 'Шампунь и гель для душа 2-в-1 для мужчин — то, что нужно. Не нужно покупать два средства. Запах приятный, мужской. Волосы мягкие, кожа не сушится. Беру повторно.',
    product: 'Шампунь для мужчин',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R00528/org/865/250523000041865.png',
    verified: true,
    likes: 25,
    date: '2 месяца назад',
  },
  {
    name: 'Марина Ж.',
    location: 'Красноярск',
    rating: 5,
    text: 'Пилинг-пэды от Атоми — мой must-have! Нежно отшелушивают, кожа после них гладкая и сияющая. Очень удобный формат, идеально для путешествий.',
    product: 'Атоми Пилинг пэды',
    productImage: 'https://image.atomy.ru/610_610/RU/goods/R01505/org/164/250523000042164.png',
    verified: true,
    likes: 39,
    date: '2 месяца назад',
  },
];

const ReviewCard = ({ review, featured = false }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`flex-shrink-0 ${featured ? 'w-[380px] md:w-[420px]' : 'w-[320px] md:w-[360px]'} rounded-3xl bg-white border border-slate-100 hover:border-atomy-blue/20 hover:shadow-xl hover:shadow-atomy-blue/5 transition-all duration-300 overflow-hidden`}
    >
      <div className="p-5 pb-0 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-atomy-blue to-atomy-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {review.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-sm text-slate-800">{review.name}</span>
            {review.verified && (
              <BadgeCheck className="w-4 h-4 text-atomy-accent flex-shrink-0" />
            )}
          </div>
          <span className="text-xs text-slate-400">{review.location} · {review.date}</span>
        </div>
        <div className="flex items-center gap-0.5 flex-shrink-0">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      <div className="p-5 pt-3">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{review.text}</p>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/80 mb-3">
          <img
            src={review.productImage}
            alt={review.product}
            className="w-12 h-12 object-contain rounded-lg bg-white p-1"
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <span className="block text-xs text-slate-500">Купленный товар</span>
            <span className="block text-sm font-medium text-slate-800 truncate">{review.product}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              liked ? 'text-atomy-blue' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <ThumbsUp className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
            Полезный ({review.likes + (liked ? 1 : 0)})
          </button>
          <span className="text-[10px] text-slate-300 uppercase tracking-wider">Проверенная покупка</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Reviews = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <Section id="reviews" background="white" animate={false}>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4 fill-amber-500" />
            <span>Отзывы покупателей</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h2">
              Нас уже <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">оценили</span>
            </Typography>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-2"
          >
            Реальные отзывы от покупателей Atomy по всей России
          </motion.p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-atomy-blue hover:text-white hover:border-atomy-blue disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-atomy-blue hover:text-white hover:border-atomy-blue disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        {reviews.map((review, i) => (
          <div key={i} className="snap-start">
            <ReviewCard review={review} featured={i < 3} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10 py-6 px-8 rounded-2xl bg-slate-50/70 border border-slate-100"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-2xl font-bold text-slate-800">4.9 / 5</p>
          <p className="text-xs text-slate-500 mt-0.5">Средний рейтинг</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-slate-800">2 000+</p>
          <p className="text-xs text-slate-500 mt-0.5">Отзывов</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-emerald-600">97%</p>
          <p className="text-xs text-slate-500 mt-0.5">Рекомендуют</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-slate-800">89%</p>
          <p className="text-xs text-slate-500 mt-0.5">Покупают повторно</p>
        </div>
      </motion.div>
    </Section>
  );
};
