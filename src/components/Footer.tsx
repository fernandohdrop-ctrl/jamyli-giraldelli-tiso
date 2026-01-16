import { personalInfo } from '../data/content';
import { Instagram, Mail } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-12 px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
                <div className="flex gap-8">
                    <a
                        href={personalInfo.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-secondary/10 rounded-full hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
                        aria-label="Instagram"
                    >
                        <Instagram size={24} />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-3 bg-secondary/10 rounded-full hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-sm opacity-60 font-light">
                    © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};
