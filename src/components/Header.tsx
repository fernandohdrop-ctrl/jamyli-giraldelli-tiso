
import { personalInfo } from '../data/content';

export const Header = () => {
    return (
        <header className="bg-primary text-secondary py-16 px-6 text-center shadow-lg">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans tracking-wide">
                    {personalInfo.name}
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 tracking-widest uppercase">
                    {personalInfo.subtitle}
                </p>
            </div>
        </header>
    );
};
