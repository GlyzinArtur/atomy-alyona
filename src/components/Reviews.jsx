import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Typography } from './ui/Typography';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Анна К.',
    location: 'Москва',
    rating: 5,
    text: 'Атоми ХемоХИМ — это просто находка! После курса приёма заметила, что стала реже болеть, больше энергии. Рекомендую всем, кто хочет поддержать иммунитет.',
    product: 'Атоми ХемоХИМ',
  },
  {
    name: 'Марина Л.',
    location: 'Санкт-Петербург',
    rating: 5,
    text: 'Набор Evening Care — моё спасение! Кожа стала чище и мягче буквально за неделю использования. Очень довольна качеством при такой цене.',
    product: 'Атоми Ивнинг Кеар',
  },
  {
    name: 'Ольга С.',
    location: 'Екатеринбург',
    rating: 5,
    text: 'Зубная паста Атоми — лучшая что я пробовала. Дёсны перестали кровоточить, зубы стали белее. И хватает надолго — в наборе 5 штук!',
    product: 'Атоми Зубная паста',
  },
  {
    name: 'Елена В.',
    location: 'Новосибирск',
    rating: 5,
    text: 'Солнцезащитный крем за 700 рублей, который лучше аналогов за 3000! Лёгкий, не оставляет белых следов, отлично защищает. Беру уже третий раз.',
    product: 'Атоми Солнцезащитный крем',
  },
  {
    name: 'Татьяна Д.',
    location: 'Краснодар',
    rating: 5,
    text: 'Абсолют СеллАктив — это что-то невероятное! Кожа подтянулась, морщинки стали менее заметны. Подруги спрашивают, что я с собой сделала.',
    product: 'Атоми Абсолют СеллАктив',
  },
  {
    name: 'Виктор Г.',
    location: 'Казань',
    rating: 5,
    text: 'Омега-3 от Атоми пью уже полгода. Качество отличное, капсулы не пахнут рыбой. Чувствую себя бодрее, суставы перестали хрустеть.',
    product: 'Атоми Аляска Е-Омега 3',
  },
  {
    name: 'Наталья И.',
    location: 'Ростов-на-Дону',
    rating: 5,
    text: 'ББ крем Атоми — идеальный тон! Ложится ровно, не сушит кожу, держится весь день. А цена — 700 рублей! Это просто подарок.',
    product: 'Атоми ББ крем',
  },
  {
    name: 'Ирина М.',
    location: 'Самара',
    rating: 5,
    text: 'Спирулина от Атоми помогла мне восстановить силы после зимы. Натуральный состав, легко принимать. Рекомендую как основу для витаминной поддержки.',
    product: 'Атоми Спирулина',
  },
];

const ReviewCard = ({ review }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[360px] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-1 mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>

    <div className="relative mb-4">
      <Quote className="absolute -top-1 -left-1 w-6 h-6 text-atomy-blue/10" />
      <p className="text-slate-600 text-sm leading-relaxed pl-4">{review.text}</p>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
      <div>
        <p className="text-sm font-semibold text-slate-800">{review.name}</p>
        <p className="text-xs text-slate-400">{review.location}</p>
      </div>
      <span className="text-xs font-medium text-atomy-accent px-2.5 py-1 rounded-full bg-atomy-accent/10">
        {review.product}
      </span>
    </div>
  </div>
);

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
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  return (
    <Section id="reviews" background="white">
      <div className="flex items-end justify-between mb-10">
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
          <Typography variant="h2">
            Нас уже оценили
          </Typography>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </Section>
  );
};
