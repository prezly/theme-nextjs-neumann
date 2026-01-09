export enum Font {
    ALEGREYA = 'alegreya',
    ALEGREYA_SANS = 'alegreya_sans',
    INTER = 'inter',
    MERRIWEATHER = 'merriweather',
    MULISH = 'mulish',
    NUNITO = 'nunito',
    OPEN_SANS = 'open_sans',
    PLAYFAIR_DISPLAY = 'playfair_display',
    PT_SERIF = 'pt_serif',
    ROBOTO = 'roboto',
    SOURCE_CODE_PRO = 'source_code_pro',
}

export type SharingPlacement = ('top' | 'bottom')[];

export enum SocialNetwork {
    BLUESKY = 'bluesky',
    FACEBOOK = 'facebook',
    MESSENGER = 'messenger',
    TWITTER = 'twitter',
    THREADS = 'threads',
    TELEGRAM = 'telegram',
    WHATSAPP = 'whatsapp',
    LINKEDIN = 'linkedin',
    MASTODON = 'mastodon',
    PINTEREST = 'pinterest',
    REDDIT = 'reddit',
}

export interface ThemeSettings {
    accent_color: string;
    background_color: string;
    categories_layout: 'dropdown' | 'bar';
    font: Font;
    footer_background_color: string;
    footer_text_color: string;
    full_width_featured_story: boolean;
    header_background_color: string;
    header_image_placement: 'above' | 'below';
    header_link_color: string;
    layout: 'grid' | 'masonry';
    logo_size: string;
    main_logo: string | null;
    main_site_label: string | null;
    main_site_url: string | null;
    show_date: boolean;
    show_featured_categories: boolean;
    show_subtitle: boolean;
    sharing_actions: SocialNetwork[];
    sharing_placement: SharingPlacement;
    show_download_pdf: boolean;
    show_download_assets: boolean;
    show_copy_content: boolean;
    show_copy_url: boolean;
    show_read_more: boolean;
    story_card_variant: 'default' | 'boxed';
    text_color: string;
}

export type StoryActions = Pick<
    ThemeSettings,
    'show_copy_content' | 'show_download_assets' | 'show_download_pdf' | 'show_copy_url'
>;

export const DEFAULT_THEME_SETTINGS: ThemeSettings = {
    // Neumann brand colors
    accent_color: '#ef7b0b', // Neumann orange
    background_color: '#000000', // Black background
    categories_layout: 'dropdown', // Categories in header row
    font: Font.ROBOTO, // Closest to FF Unit Pro (will be overridden with custom font)
    footer_background_color: '#000000',
    footer_text_color: '#c1c1c1',
    full_width_featured_story: true, // Neumann has full-width hero
    header_background_color: '#000000',
    header_image_placement: 'below',
    header_link_color: '#c1c1c1', // Gray nav links
    layout: 'grid',
    logo_size: 'large',
    main_logo: null,
    main_site_label: 'Sennheiser',
    main_site_url: 'https://newsroom.sennheiser.com/',
    show_date: true,
    show_featured_categories: false, // Neumann uses nav categories
    sharing_actions: [
        SocialNetwork.FACEBOOK,
        SocialNetwork.TWITTER,
        SocialNetwork.LINKEDIN,
        SocialNetwork.WHATSAPP,
    ],
    sharing_placement: ['bottom'],
    show_copy_content: true,
    show_copy_url: true,
    show_subtitle: true,
    show_read_more: true,
    show_download_pdf: true,
    show_download_assets: true,
    story_card_variant: 'boxed', // Cards with background
    text_color: '#c1c1c1', // Gray text
};

export const FONT_FAMILY = {
    [Font.ALEGREYA]: "'Alegreya', serif",
    [Font.ALEGREYA_SANS]: "'Alegreya Sans', sans-serif",
    [Font.INTER]: 'Inter, sans-serif',
    [Font.MERRIWEATHER]: 'Merriweather, serif',
    [Font.MULISH]: 'Mulish, sans-serif',
    [Font.NUNITO]: "'Nunito', sans-serif",
    [Font.OPEN_SANS]: "'Open Sans', sans-serif",
    [Font.PLAYFAIR_DISPLAY]: "'Playfair Display', serif",
    [Font.PT_SERIF]: "'PT Serif', serif",
    [Font.ROBOTO]: 'Roboto, sans-serif',
    [Font.SOURCE_CODE_PRO]: "'Source Code Pro', monospace",
};

export function getRelatedFont(font: Font): Font | null {
    switch (font) {
        case Font.ALEGREYA:
        case Font.PLAYFAIR_DISPLAY:
            return Font.ALEGREYA_SANS;
        default:
            return null;
    }
}

export function getGoogleFontName(font: Font): string {
    switch (font) {
        case Font.ALEGREYA:
            return 'Alegreya';
        case Font.ALEGREYA_SANS:
            return 'Alegreya Sans';
        case Font.MERRIWEATHER:
            return 'Merriweather';
        case Font.MULISH:
            return 'Mulish';
        case Font.NUNITO:
            return 'Nunito';
        case Font.OPEN_SANS:
            return 'Open Sans';
        case Font.PLAYFAIR_DISPLAY:
            return 'Playfair Display';
        case Font.PT_SERIF:
            return 'PT Serif';
        case Font.ROBOTO:
            return 'Roboto';
        case Font.SOURCE_CODE_PRO:
            return 'Source Code Pro';
        default:
            return 'Inter';
    }
}
