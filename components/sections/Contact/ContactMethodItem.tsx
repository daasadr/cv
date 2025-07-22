interface ContactMethodItemProps {
  label: string;
  value: string;
  icon: string;
  href: string;
  description: string;
}

export default function ContactMethodItem({
  label,
  value,
  icon,
  href,
  description,
}: ContactMethodItemProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 focus:bg-gray-100 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-describedby={`contact-${label.toLowerCase().replace(/\s+/g, '-')}-desc`}
    >
      <div className="text-2xl" aria-hidden="true">
        {icon}
      </div>
      <div>
        <div className="font-medium text-gray-900 group-hover:text-indigo-600 group-focus:text-indigo-600">
          {label}
        </div>
        <div className="text-gray-600">{value}</div>
      </div>
      <span
        id={`contact-${label.toLowerCase().replace(/\s+/g, '-')}-desc`}
        className="sr-only"
      >
        {description}
        {href.startsWith('http') && ' - otevře se v novém okně'}
      </span>
    </a>
  );
}
