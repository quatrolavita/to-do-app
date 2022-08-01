export interface IToDoCard {
    description: string;
    status: 'IP' | 'DN';
    pub_date?: string;
    pk?: number;
}
// @TODO make extends from IToDoCard
export interface ICreateToDoCardData {
    description: string;
    status: 'IP' | 'DN';
}
// @TODO make extends from IToDoCard
export type IUpdateToDoCardData = Pick<
    IToDoCard,
    'description' | 'status' | 'pk'
>;
