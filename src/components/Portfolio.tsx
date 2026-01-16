import { useState } from 'react';
import { portfolioItems } from '../data/content';
import { X, Play } from 'lucide-react';

export const Portfolio = () => {
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    return (
        <section className="py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center tracking-wide">Portfólio</h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative aspect-[9/16] h-auto overflow-hidden rounded-xl shadow-md cursor-pointer bg-gray-100"
                            onClick={() => setSelectedMedia(item.imageUrl)}
                        >
                            {item.imageUrl.match(/\.(mp4|mov)/i) ? (
                                <div className="w-full h-full relative">
                                    <video
                                        src={item.imageUrl}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <div className="bg-primary/80 text-white p-4 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300">
                                            <Play size={24} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}

                            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center z-20">
                                <h3 className="text-xl font-bold text-secondary mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.title}
                                </h3>
                                <p className="text-secondary/90 text-sm line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150 leading-relaxed font-light">
                                    {item.description}
                                </p>
                                <span className="mt-4 text-xs font-semibold text-secondary/80 bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
                                    {item.imageUrl.match(/\.(mp4|mov)/i) ? 'Assistir Vídeo' : 'Ver Imagem'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Media Modal */}
            {selectedMedia && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedMedia(null)}
                >
                    <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center rounded-lg shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedMedia(null)}
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50 bg-black/50 p-2 rounded-full"
                        >
                            <X size={32} />
                        </button>

                        {selectedMedia.match(/\.(mp4|mov)/i) ? (
                            <video
                                src={selectedMedia}
                                className="w-full h-full max-h-[90vh] object-contain"
                                controls
                                autoPlay
                            />
                        ) : (
                            <img
                                src={selectedMedia}
                                className="w-full h-full max-h-[90vh] object-contain"
                                alt="Portfolio media"
                            />
                        )}

                    </div>
                </div>
            )}
        </section>
    );
};
