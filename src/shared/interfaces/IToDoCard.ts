export interface IToDoCard {
    description: string;
    status: 'IP' | 'DN';
    pub_date?: string;
}
