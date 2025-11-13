'use client';

import Image from 'next/image';
import Card from '@/components/ui/Card';
import { useLanguage } from '@/lib/LanguageContext';

export default function MusicSection() {
  const { language } = useLanguage();

  const artists = [
    {
      name: '方大同',
      nameEn: 'Khalil Fong',
      role: '华语R&B代表人物',
      roleEn: 'Chinese R&B Icon',
      genre: 'R&B / Soul',
      image: '/images/fang.jpeg',
      description: '方大同的音乐充满温度和灵魂，他将传统R&B与现代电子音乐完美融合。从《Love Song》到《春风吹》，每首歌都展现了他对音乐的独特理解。他的声音温暖而有力，歌词真挚动人。',
      descriptionEn: 'Khalil Fong\'s music is full of warmth and soul, perfectly blending traditional R&B with modern electronic music. From "Love Song" to "Spring Wind", each song showcases his unique understanding of music.',
      highlights: ['Love Song', '春风吹', 'Soulboy', '好不容易'],
      favoriteAlbum: '《Soulboy》',
      favoriteAlbumEn: 'Soulboy (2005)',
    },
    {
      name: 'Cory Wong',
      nameEn: 'Cory Wong',
      role: '现代Funk吉他大师',
      roleEn: 'Modern Funk Guitar Master',
      genre: 'Funk / Jazz',
      image: '/images/corywong.jpg',
      description: 'Cory Wong的Funk吉他风格充满律动和能量，他作为Vulfpeck乐队成员，创造了无数让人忍不住摇摆的音乐。他的节奏型吉他演奏技巧无人能及，每个音符都充满欢乐和正能量。',
      descriptionEn: 'Cory Wong\'s Funk guitar style is full of groove and energy. As a member of Vulfpeck, he creates countless music that makes you want to move. His rhythm guitar playing technique is unmatched.',
      highlights: ['Golden', 'Cosmic Sans', 'The Optimist', 'Meditation'],
      favoriteAlbum: '《Motivational Music for the Syncopated Soul》',
      favoriteAlbumEn: 'Motivational Music for the Syncopated Soul (2019)',
    },
    {
      name: '张悬',
      nameEn: 'Deserts Chang',
      role: '独立音乐创作人',
      roleEn: 'Independent Singer-Songwriter',
      genre: 'Indie / Folk',
      image: '/images/IMG_9636.jpeg',
      description: '张悬的音乐真诚而有深度，她的歌词总是能触及内心最柔软的地方。从《宝贝》到《关于我爱你》，她用细腻的情感和诗意的表达，讲述生活中的爱与痛。她的现场演出充满感染力。',
      descriptionEn: 'Deserts Chang\'s music is sincere and profound. Her lyrics always touch the softest part of the heart. From "Baby" to "About I Love You", she tells stories of love and pain with delicate emotions and poetic expression.',
      highlights: ['宝贝', '关于我爱你', '城市', '南国的孩子'],
      favoriteAlbum: '《城市》',
      favoriteAlbumEn: 'City (2009)',
    },
    {
      name: '孙燕姿',
      nameEn: 'Stefanie Sun',
      role: '华语流行天后',
      roleEn: 'Mandopop Queen',
      genre: 'Pop',
      image: '/images/IMG_9637.jpeg',
      description: '孙燕姿的声音独特而富有辨识度，她从出道至今保持着高水准的音乐品质。《天黑黑》《遇见》《我怀念的》等经典作品陪伴了一代人的青春。她的音乐既有流行的旋律，又不失艺术性。',
      descriptionEn: 'Stefanie Sun\'s voice is unique and highly recognizable. From her debut to now, she maintains high-quality music. Classics like "It\'s Dark", "Meet", and "What I Miss" accompanied a generation\'s youth.',
      highlights: ['天黑黑', '遇见', '我怀念的', '逆光'],
      favoriteAlbum: '《The Moment》',
      favoriteAlbumEn: 'The Moment (2003)',
    },
    {
      name: 'Stevie Wonder',
      nameEn: 'Stevie Wonder',
      role: '灵魂乐传奇',
      roleEn: 'Soul Music Legend',
      genre: 'Soul / R&B',
      image: '/images/IMG_9639.jpeg',
      description: 'Stevie Wonder是真正的音乐天才，他的作品定义了Soul音乐的黄金时代。从《Superstition》到《Isn\'t She Lovely》，每首歌都是经典。他的音乐充满了爱、希望和社会责任感，影响了几代音乐人。',
      descriptionEn: 'Stevie Wonder is a true musical genius whose work defined the golden age of Soul music. From "Superstition" to "Isn\'t She Lovely", every song is a classic. His music is filled with love, hope, and social responsibility.',
      highlights: ['Superstition', 'Isn\'t She Lovely', 'Sir Duke', 'I Just Called to Say I Love You'],
      favoriteAlbum: '《Songs in the Key of Life》',
      favoriteAlbumEn: 'Songs in the Key of Life (1976)',
    },
    {
      name: 'John Mayer',
      nameEn: 'John Mayer',
      role: '布鲁斯摇滚吉他手',
      roleEn: 'Blues Rock Guitarist',
      genre: 'Blues / Rock',
      image: '/images/IMG_9640.jpeg',
      description: 'John Mayer将布鲁斯的深度与流行音乐的可听性完美结合，他的吉他技术出众，尤其擅长即兴演奏。从《Your Body Is a Wonderland》到《Gravity》，他的音乐既有商业成功，又保持艺术深度。',
      descriptionEn: 'John Mayer perfectly combines the depth of blues with the accessibility of pop music. His guitar skills are outstanding, especially in improvisation. From "Your Body Is a Wonderland" to "Gravity", his music achieves both commercial success and artistic depth.',
      highlights: ['Gravity', 'Slow Dancing in a Burning Room', 'Continuum', 'New Light'],
      favoriteAlbum: '《Continuum》',
      favoriteAlbumEn: 'Continuum (2006)',
    },
  ];

  return (
    <section id="music" className="py-24 dark-section">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'zh' ? '音乐品味' : 'Music Taste'}
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            {language === 'zh'
              ? '音乐是我生活中不可或缺的一部分，这些是我最喜欢的音乐人'
              : 'Music is an essential part of my life. Here are my favorite artists'}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => {
            return (
            <div
              key={index}
              className="animate-fade-in glass-card rounded-xl overflow-hidden transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col">
                {/* CD Player */}
                <div className="relative overflow-visible group p-8 bg-gradient-to-br from-gray-900 via-gray-850 to-black">
                  {/* Vinyl Record Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-radial-gradient(circle at center, transparent 0, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
                    }}></div>
                  </div>

                  {/* CD Disc */}
                  <div className="relative aspect-square mx-auto" style={{ maxWidth: '280px' }}>
                    {/* CD Shine Effect */}
                    <div className="absolute inset-0 rounded-full cd-shine"></div>

                    {/* CD */}
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white/10 cd-disc playing"
                         style={{
                           boxShadow: '0 0 40px rgba(52, 168, 83, 0.4), 0 0 80px rgba(52, 168, 83, 0.2), inset 0 0 60px rgba(0,0,0,0.5)'
                         }}>
                      {artist.image && (
                        <Image
                          src={artist.image}
                          alt={language === 'zh' ? artist.name : artist.nameEn}
                          fill
                          className="object-cover"
                          sizes="280px"
                        />
                      )}

                      {/* CD Grooves */}
                      <div className="absolute inset-0 rounded-full" style={{
                        background: `repeating-radial-gradient(circle at center,
                          transparent 0,
                          transparent 8px,
                          rgba(255,255,255,0.02) 8px,
                          rgba(255,255,255,0.02) 9px)`
                      }}></div>
                    </div>

                    {/* Genre Badge */}
                    <div className="absolute -top-2 -right-2 glass-card text-white px-3 py-1.5 rounded-full text-xs font-bold z-10 shadow-lg">
                      {artist.genre}
                    </div>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language === 'zh' ? artist.name : artist.nameEn}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {language === 'zh' ? artist.role : artist.roleEn}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-100 leading-relaxed">
                    {language === 'zh' ? artist.description : artist.descriptionEn}
                  </p>

                  {/* Representative Works */}
                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-medium">
                      {language === 'zh' ? '代表作品:' : 'Representative Works:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {artist.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Favorite Album */}
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs text-gray-400">
                      <span className="font-medium">
                        {language === 'zh' ? '最喜欢的专辑: ' : 'Favorite Album: '}
                      </span>
                      <span className="text-gray-100">
                        {language === 'zh' ? artist.favoriteAlbum : artist.favoriteAlbumEn}
                      </span>
                    </p>
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
