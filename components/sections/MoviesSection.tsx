'use client';

import React from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';

export default function MoviesSection() {
  const { language } = useLanguage();
  const [expandedMovie, setExpandedMovie] = React.useState<number | null>(null);

  const movies = [
    {
      title: '爱在黎明破晓前',
      titleEn: 'Before Sunrise',
      year: '1995',
      director: 'Richard Linklater',
      genre: '爱情 / 剧情',
      genreEn: 'Romance / Drama',
      poster: '/images/before-sunrise.jpg',
      description: 'Jesse和Celine在维也纳的一夜邂逅，他们漫步在城市街头，分享彼此的人生故事',
      descriptionEn: 'Jesse and Celine\'s one-night encounter in Vienna, walking through city streets and sharing life stories',
      review: '这是我最喜欢的电影三部曲的开篇。两个陌生人在火车上相遇，决定在维也纳共度一夜。没有华丽的场景，只有不断的对话，却让人感受到最纯粹的浪漫。电影探讨了爱情、人生、死亡、时间等深刻主题，每次重看都有新的感悟。',
      reviewEn: 'This is the first film of my favorite trilogy. Two strangers meet on a train and decide to spend a night together in Vienna. No fancy scenes, just continuous dialogue, yet it conveys the purest romance. The film explores deep themes like love, life, death, and time.',
      memorableQuote: '"If there\'s any kind of magic in this world, it must be in the attempt of understanding someone, sharing something."',
      rating: '9.5/10',
      tags: ['对话式电影', '浪漫', '哲学思考'],
      tagsEn: ['Dialogue-driven', 'Romantic', 'Philosophical'],
    },
    {
      title: '爱在日落黄昏时',
      titleEn: 'Before Sunset',
      year: '2004',
      director: 'Richard Linklater',
      genre: '爱情 / 剧情',
      genreEn: 'Romance / Drama',
      poster: '/images/before-sunset-hq.jpg',
      description: '九年后的巴黎重逢，在日落前的90分钟里，他们重新点燃了彼此的火花',
      descriptionEn: 'Nine years later, they reunite in Paris for 90 minutes before sunset, reigniting their spark',
      review: '三部曲中我最爱的一部。九年后的重逢，充满了遗憾、成熟和未了的情愫。整部电影几乎是实时拍摄，跟随他们在巴黎的漫步，对话更加深刻和真实。结尾那句"Baby, you are gonna miss that plane"成为影史经典。',
      reviewEn: 'My favorite of the trilogy. The reunion after nine years is full of regret, maturity, and unfinished feelings. The film is shot almost in real-time, following their walk through Paris. The ending line "Baby, you are gonna miss that plane" became a classic.',
      memorableQuote: '"Baby, you are gonna miss that plane." "I know."',
      rating: '10/10',
      tags: ['完美结局', '成熟爱情', '巴黎'],
      tagsEn: ['Perfect Ending', 'Mature Love', 'Paris'],
    },
    {
      title: '爱在午夜降临前',
      titleEn: 'Before Midnight',
      year: '2013',
      director: 'Richard Linklater',
      genre: '爱情 / 剧情',
      genreEn: 'Romance / Drama',
      poster: '/images/before-midnight.jpg',
      description: '在希腊的假期中，他们审视婚姻生活的真实与复杂',
      descriptionEn: 'During their vacation in Greece, they examine the reality and complexity of married life',
      review: '三部曲的完结篇展现了婚姻生活的真实面貌。浪漫褪去，取而代之的是日常琐事、责任和争吵。但正是这种真实，让这部电影更有力量。它告诉我们，真正的爱情不是永远的激情，而是在平凡中的坚持。',
      reviewEn: 'The final chapter shows the reality of married life. Romance fades, replaced by daily chores, responsibilities, and arguments. But it\'s this reality that makes the film more powerful. It tells us that true love is not eternal passion, but persistence in the ordinary.',
      memorableQuote: '"Life doesn\'t just happen to you. You\'re not a passive participant."',
      rating: '9/10',
      tags: ['婚姻真相', '成长', '希腊'],
      tagsEn: ['Marriage Reality', 'Growth', 'Greece'],
    },
    {
      title: '爱乐之城',
      titleEn: 'La La Land',
      year: '2016',
      director: 'Damien Chazelle',
      genre: '爱情 / 音乐',
      genreEn: 'Romance / Musical',
      poster: '/images/la-la-land.jpg',
      description: '追梦者在洛杉矶相遇相爱，在梦想与现实之间做出选择',
      descriptionEn: 'Dreamers meet and fall in love in Los Angeles, choosing between dreams and reality',
      review: '一部美丽而忧伤的现代音乐剧。色彩、音乐、舞蹈完美融合，每一帧都是艺术品。它讲述了追梦路上的爱情，以及当梦想与爱情冲突时的艰难选择。结尾的"what could have been"蒙太奇让人潸然泪下。这是对梦想最好的致敬。',
      reviewEn: 'A beautiful and melancholic modern musical. Color, music, and dance blend perfectly, each frame is a work of art. It tells the story of love on the road to dreams, and the difficult choice when dreams conflict with love. The "what could have been" montage at the end is tearful.',
      memorableQuote: '"Here\'s to the ones who dream, foolish as they may seem."',
      rating: '9.5/10',
      tags: ['音乐剧', '追梦', '洛杉矶', '摄影美学'],
      tagsEn: ['Musical', 'Dream-chasing', 'LA', 'Cinematography'],
    },
    {
      title: '我的天才女友',
      titleEn: 'My Brilliant Friend',
      year: '2018',
      director: 'Saverio Costanzo',
      genre: '剧情',
      genreEn: 'Drama',
      poster: '/images/my-brilliant-friend-hd.jpg',
      description: '两个女孩在战后意大利那不勒斯的成长故事，关于友谊、竞争和命运',
      descriptionEn: 'The story of two girls growing up in post-war Naples, Italy, about friendship, competition and fate',
      review: '改编自费兰特的同名小说，这部剧集完美呈现了女性友谊的复杂性。Elena和Lila的关系充满了爱、嫉妒、竞争和依赖。她们在贫困的那不勒斯长大，用不同的方式对抗命运。导演用诗意的镜头语言，捕捉了战后意大利的质感和两个女孩的内心世界。',
      reviewEn: 'Adapted from Ferrante\'s novel, this series perfectly presents the complexity of female friendship. Elena and Lila\'s relationship is filled with love, jealousy, competition, and dependence. They grow up in impoverished Naples, fighting fate in different ways.',
      memorableQuote: '"You are my brilliant friend, you have to be the best of all, boys and girls."',
      rating: '9/10',
      tags: ['女性友谊', '成长', '意大利', '文学改编'],
      tagsEn: ['Female Friendship', 'Coming of Age', 'Italy', 'Literary Adaptation'],
    },
  ];

  return (
    <section id="movies" className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'zh' ? '电影品味' : 'Movies'}
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            {language === 'zh'
              ? '电影是我观察世界的另一个窗口，这些作品深深影响了我'
              : 'Movies are another window through which I observe the world. These works have deeply influenced me'}
          </p>
        </div>

        {/* Movies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie, index) => {
            const isExpanded = expandedMovie === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl cursor-pointer animate-fade-in glass-card transition-all duration-500"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => setExpandedMovie(isExpanded ? null : index)}
              >
                <div className="flex flex-col">
                  {/* Movie Poster */}
                  <div className="relative overflow-hidden group">
                    <div className="aspect-[2/3] bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 relative">
                      {movie.poster && (
                        <Image
                          src={movie.poster}
                          alt={language === 'zh' ? movie.title : movie.titleEn}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <span className="text-white text-sm font-medium px-5 py-2.5 glass-card rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {isExpanded
                            ? language === 'zh'
                              ? '收起详情'
                              : 'Show Less'
                            : language === 'zh'
                            ? '查看详情'
                            : 'View Details'}
                        </span>
                      </div>
                      {/* Year Badge */}
                      <div className="absolute top-4 left-4 glass-card text-white px-3 py-1.5 rounded-lg text-xs font-bold z-10 shadow-lg">
                        {movie.year}
                      </div>
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold z-10 shadow-lg">
                        ⭐ {movie.rating}
                      </div>
                    </div>
                  </div>

                  {/* Movie Info */}
                  <div className="p-6 space-y-3">
                    {/* Title and Director */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {language === 'zh' ? movie.title : movie.titleEn}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{movie.director}</p>
                      <span className="inline-block px-3 py-1 bg-white/10 text-gray-100 text-xs rounded-full border border-white/20">
                        {language === 'zh' ? movie.genre : movie.genreEn}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-gray-100 leading-relaxed">
                      {language === 'zh' ? movie.description : movie.descriptionEn}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {(language === 'zh' ? movie.tags : movie.tagsEn).map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-white/10 space-y-4 animate-fade-in">
                        {/* Review */}
                        <div>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                            {language === 'zh' ? '个人影评' : 'Personal Review'}
                          </h4>
                          <p className="text-sm text-gray-100 leading-relaxed">
                            {language === 'zh' ? movie.review : movie.reviewEn}
                          </p>
                        </div>

                        {/* Memorable Quote */}
                        <div className="bg-white/5 p-4 rounded-lg border-l-4 border-green-500/50">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                            {language === 'zh' ? '难忘台词' : 'Memorable Quote'}
                          </h4>
                          <p className="text-sm text-gray-100 italic leading-relaxed">
                            {movie.memorableQuote}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Expand Indicator */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-50 font-medium">
                      <span>{isExpanded ? (language === 'zh' ? '收起详情' : 'Show Less') : (language === 'zh' ? '展开详情' : 'Show More')}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
