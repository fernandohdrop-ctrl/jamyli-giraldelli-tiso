import { personalInfo } from '../data/content';

export const About = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-secondary rounded-full flex items-center justify-center overflow-hidden border-4 border-primary shadow-xl">
                    <img
                        src={personalInfo.photoUrl}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-primary mb-6 font-sans border-b-2 border-secondary inline-block pb-2">Sobre</h2>
                    <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                        {personalInfo.bio}
                    </p>
                </div>
            </div>
        </section>
    );
};
