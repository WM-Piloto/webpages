import { CardContainerProps } from '.';

export default {
  className: 'art',
  cardList: [
    {
      id: '1',
      cardName: 'Logo',
      cardLogo: 'https://picsum.photos/600',
      cardText: '',
      className: 'cardUp',
    },
    {
      id: '2',

      cardLogo: 'https://picsum.photos/200',
      cardName: 'Logo',
      cardText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      className: 'cardLeft',
    },
    {
      id: '3',
      cardLogo: 'https://picsum.photos/200',
      cardName: 'Logo',
      cardText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.',
      className: 'cardRight',
    },
  ],
} as CardContainerProps;
