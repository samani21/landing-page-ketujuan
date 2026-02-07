export interface HeroType {
    id: number;
    badge_icon?: string;
    badge_text: string;
    title_line_1: string;
    title_line_2: string;
    description: string;
    primary_button_text: string;
    primary_button_url: string;
    primary_button_icon?: string;
    secondary_button_text?: string;
    secondary_button_url?: string;
    secondary_button_icon?: string;
    social_proof_text?: string;
    is_active: boolean;
}
