import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function SocialLinks({ className = "" }) {
  const socialData = [
    {
      name: "GitHub",
      url: "https://github.com/josh-catala",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joshua-catala-34042a209/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/josh.catala",
      icon: FaInstagram,
    },
    {
      name: "Email",
      url: "mailto:jls.catala@gmail.com",
      icon: FaEnvelope,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialData.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="p-2.5 rounded-lg bg-card-dark light:bg-gray-100 text-gray-200 light:text-gray-700 hover:text-pearl-aqua-300 light:hover:text-deep-teal-600 hover:bg-card-border/40 light:hover:bg-gray-200 transition-all text-xl"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}