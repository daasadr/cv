// Emoji Favicon Options
// Choose the emoji that best represents your portfolio

export interface EmojiOption {
  emoji: string;
  name: string;
  description: string;
}

export const emojiOptions: EmojiOption[] = [
  {
    emoji: '👩‍💻',
    name: 'Woman Technologist',
    description: 'Perfect for female developers - currently active'
  },
  {
    emoji: '💻',
    name: 'Laptop',
    description: 'Classic developer symbol'
  },
  {
    emoji: '🚀',
    name: 'Rocket',
    description: 'Represents growth and innovation'
  },
  {
    emoji: '⚡',
    name: 'Lightning Bolt',
    description: 'Speed and efficiency'
  },
  {
    emoji: '🦄',
    name: 'Unicorn',
    description: 'Unicorn'
  }
];

// Current active emoji
export const currentEmoji = '👩‍💻';

// Generate SVG data URI for any emoji
export function generateEmojiSVG(emoji: string): string {
  return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${emoji}</text></svg>`;
}

// Generate favicon metadata object
export function generateFaviconMetadata(emoji: string) {
  const svgUri = generateEmojiSVG(emoji);
  
  return {
    icon: [
      {
        url: svgUri,
        type: 'image/svg+xml',
      },
    ],
    shortcut: svgUri,
    apple: [
      {
        url: svgUri,
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  };
}

// Get current favicon metadata
export const currentFaviconMetadata = generateFaviconMetadata(currentEmoji); 